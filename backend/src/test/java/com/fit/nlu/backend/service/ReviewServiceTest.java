package com.fit.nlu.backend.service;

import com.fit.nlu.backend.entity.Review;
import com.fit.nlu.backend.repository.ReviewRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.data.domain.*;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class ReviewServiceTest {

    @Mock
    private ReviewRepository reviewRepository;

    @InjectMocks
    private ReviewService reviewService;

    private Review review;

    @BeforeEach
    public void setUp() {
        review = new Review();
        review.setId(1);
    }

    @DisplayName("save new review when review is valid should return true")
    @Test
    public void saveNewReview_WhenReviewIsValid_ShouldReturnTrue() {
        when(reviewRepository.save(review)).thenReturn(review);
        Review newReview = reviewService.createNewReview(review);
        assertAll(
                () -> assertEquals(review, newReview),
                () -> assertNotNull(newReview.getInsertedDate()),
                () -> assertNull(newReview.getUpdatedDate()));
        Mockito.verify(reviewRepository).save(review);
    }

    @DisplayName("get list review when movie id and current page is valid should return list review")
    @Test
    public void getListReview_WhenMovieIdAndCurrentPageIsValid_ShouldReturnListReview() {
        int movieId = 1;
        int currentPage = 0;
        List<Review> reviewList = new ArrayList<Review>();
        reviewList.add(review);
        Page<Review> page = new PageImpl<>(reviewList);
        PageRequest pageRequest = PageRequest.of(currentPage, 5);
//        when(reviewRepository.findByMovieId(movieId, pageRequest)).thenReturn(page);
//        Page<Review> result = reviewService.getListReview(movieId, currentPage);
//        assertAll(
//                () -> assertEquals(page.getTotalElements(), result.getTotalElements()),
//                () -> assertEquals(page.getContent(), result.getContent()),
//                () -> assertEquals(page.getNumber(), result.getNumber()));
    }
}
