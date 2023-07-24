package com.fit.nlu.backend.service;

import com.fit.nlu.backend.entity.Movie;
import com.fit.nlu.backend.entity.Review;
import com.fit.nlu.backend.entity.User;
import com.fit.nlu.backend.exception.CustomException;
import com.fit.nlu.backend.model.CustomUserDetails;
import com.fit.nlu.backend.repository.MovieRepository;
import com.fit.nlu.backend.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.*;
import javax.transaction.Transactional;
import java.util.Date;
import java.util.List;

@Service
public class ReviewService {

    @PersistenceContext
    private EntityManager entityManager;

    @Autowired
    private ReviewRepository reviewRepository;

    @Autowired
    private MovieRepository movieRepository;

    @Transactional
    public Review createNewReview(Review review) throws CustomException {
        Movie movie = movieRepository
                .findById(review.getMovieId())
                .orElseThrow(() -> new CustomException(HttpStatus.BAD_REQUEST, "cannot find movie Id"));

        Date date = new Date();
        review.setInsertedDate(date);
        review.setUpdatedDate(date);
        CustomUserDetails userDetails =
                (CustomUserDetails)SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        review.setUser(userDetails.getUser());

        Review newReview = reviewRepository.save(review);
        movie.setReviewNumber(movie.getReviewNumber() + 1);
        movieRepository.save(movie);
        return newReview;
    }

    public List<Review> getListReview(int movieId, int currentPage, String sortBy) throws CustomException {
        Pageable pageable = PageRequest.of(currentPage, 5);

        CriteriaBuilder criteriaBuilder = entityManager.getCriteriaBuilder();
        CriteriaQuery<Review> criteriaQuery = criteriaBuilder.createQuery(Review.class);
        Root<Review> reviewRoot = criteriaQuery.from(Review.class);
        Predicate hasMovieId = criteriaBuilder.equal(reviewRoot.get("movieId"), movieId);

        Order orderBy = null;
        if (sortBy.equals("insertedDateDESC")) {
            orderBy = criteriaBuilder.desc(reviewRoot.get("insertedDate"));
        } else if (sortBy.equals("ratingASC")) {
            orderBy = criteriaBuilder.asc(reviewRoot.get("rating"));
        } else if (sortBy.equals("ratingDESC")) {
            orderBy = criteriaBuilder.desc(reviewRoot.get("rating"));
        } else {
            throw new CustomException(HttpStatus.BAD_REQUEST, "cannot sort by " + sortBy);
        }

        criteriaQuery.select(reviewRoot)
                .where(hasMovieId)
                .orderBy(orderBy);

        return entityManager.createQuery(criteriaQuery)
                .setFirstResult((int) pageable.getOffset())
                .setMaxResults(pageable.getPageSize())
                .getResultList();
    }
}
