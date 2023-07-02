package com.fit.nlu.backend.service;

import com.fit.nlu.backend.entity.Review;
import com.fit.nlu.backend.exception.CustomException;
import com.fit.nlu.backend.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.*;
import javax.transaction.Transactional;
import java.util.Date;

@Service
public class ReviewService {

    @PersistenceContext
    private EntityManager entityManager;

    @Autowired
    private ReviewRepository reviewRepository;

    @Transactional
    public Review createNewReview(Review review) {
        review.setInsertedDate(new Date());
        Review newReview = reviewRepository.save(review);
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
        }
        else if (sortBy.equals("ratingASC")) {
            orderBy = criteriaBuilder.asc(reviewRoot.get("rating"));
        }
        else if (sortBy.equals("ratingDESC")) {
            orderBy = criteriaBuilder.desc(reviewRoot.get("rating"));
        }
        else {
            throw new CustomException(HttpStatus.BAD_REQUEST, "cannot sort by with parameter");
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
