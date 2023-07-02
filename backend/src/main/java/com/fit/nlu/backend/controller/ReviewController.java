package com.fit.nlu.backend.controller;

import com.fit.nlu.backend.entity.Review;
import com.fit.nlu.backend.entity.User;
import com.fit.nlu.backend.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Date;
import java.util.List;

@RestController()
@RequestMapping("/api/review")
@CrossOrigin
public class ReviewController {

    @Autowired
    private ReviewService reviewService;

    @GetMapping("/get")
    public ResponseEntity<List<Review>> getReviewsList(int movieId, int currentPage) {
        Page<Review> reviews = reviewService.getListReview(movieId, currentPage);

        return ResponseEntity.ok().body(reviews.getContent());
    }

    @PostMapping("/add")
    public ResponseEntity<Review> createNewReview(@Valid @RequestBody Review review) {
        Review newReview =  reviewService.createNewReview(review);
        // tmp add
        User user = new User();
        user.setId(1);
        newReview.setUser(user);
        // tmp end
        Date date = new Date();
        review.setInsertedDate(date);
        return ResponseEntity.ok().body(newReview);
    }
}
