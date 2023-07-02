package com.fit.nlu.backend.service;

import com.fit.nlu.backend.entity.Review;
import com.fit.nlu.backend.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Date;

@Service
public class ReviewService {

    @Autowired
    private ReviewRepository reviewRepository;

    @Transactional
    public Review createNewReview(Review review) {
        review.setInsertedDate(new Date());
        Review newReview = reviewRepository.save(review);
        return newReview;
    }

    public Page<Review> getListReview(int movieId, int currentPage) {
        Page<Review> reviewList = reviewRepository.findByMovieId(movieId, PageRequest.of(currentPage, 5));
        return reviewList;
    }
}
