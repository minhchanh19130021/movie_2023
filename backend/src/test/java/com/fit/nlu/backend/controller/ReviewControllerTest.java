package com.fit.nlu.backend.controller;

import com.fit.nlu.backend.entity.Review;
import com.fit.nlu.backend.jwt.JwtAuthenticationFilter;
import com.fit.nlu.backend.service.ReviewService;
import com.fit.nlu.backend.service.UserService;
import org.codehaus.jackson.map.ObjectMapper;
import org.json.JSONObject;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(MockitoExtension.class)
@WebMvcTest(ReviewController.class)
@AutoConfigureMockMvc(addFilters = false)
public class ReviewControllerTest {
    @SuppressWarnings("SpringJavaInjectionPointsAutowiringInspection") // to ignore error of version
    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private ReviewService reviewService;

    @MockBean
    private UserService userService;

    @MockBean
    private JwtAuthenticationFilter jwtAuthenticationFilter;

    @Test
    public void testCreateNewReview() throws Exception {
        Review review = new Review();
        review.setReviewText("123");
        review.setMovieId(1);
        review.setRating(1);

//        review.setUserId(1);
        given(reviewService.createNewReview(review)).willReturn(review);
        ObjectMapper mapper = new ObjectMapper();
        System.out.println(mapper.writeValueAsString(review));
        mockMvc.perform(post("/api/review/add")
                                .content(mapper.writeValueAsString(review))
                                .contentType(MediaType.APPLICATION_JSON)
                                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
        verify(reviewService, times(1)).createNewReview(review);
    }
}
