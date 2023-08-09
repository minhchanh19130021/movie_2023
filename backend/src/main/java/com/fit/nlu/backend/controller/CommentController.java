package com.fit.nlu.backend.controller;

import com.fit.nlu.backend.entity.Comment;
import com.fit.nlu.backend.exception.CustomException;
import com.fit.nlu.backend.jwt.JwtTokenProvider;
import com.fit.nlu.backend.request.CommentRequest;
import com.fit.nlu.backend.model.CustomUserDetails;
import com.fit.nlu.backend.request.LikeCommentRequest;
import com.fit.nlu.backend.request.MovieFavoriteRequest;
import com.fit.nlu.backend.response.LikeResponse;
import com.fit.nlu.backend.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Date;
import java.util.List;


@RestController()
@RequestMapping("/api/comment")
@CrossOrigin
public class CommentController {

    @Autowired
    private CommentService commentService;

    @Autowired
    JwtTokenProvider tokenProvider;

    @GetMapping("/get")
    public ResponseEntity<List<Comment>> getCommentsList(int movieId, int currentPage, String sortBy) throws CustomException {
        List<Comment> comments = commentService.getListComment(movieId, currentPage, sortBy);
        return ResponseEntity.ok().body(comments);
    }

    @PostMapping("/add")
    public ResponseEntity<?> addComment(@RequestBody CommentRequest commentRequest) {
        CustomUserDetails userDetails =
                (CustomUserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Integer userId = userDetails.getUser().getId();
        if (commentRequest.getReviewText() == null || commentRequest.getReviewText().trim().isEmpty()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Review text must not be blank");
        }

        Comment newComment = new Comment();
        newComment.setUserId(userId);
        newComment.setMovieId(commentRequest.getMovieId());
        newComment.setReviewText(commentRequest.getReviewText());
        newComment.setInsertedDate(new Date());
        newComment.setUpdatedDate(new Date());

        Comment savedComment = commentService.addComment(newComment);
        return ResponseEntity.ok(savedComment);
    }

//    @PostMapping("/likeComment")
//    public ResponseEntity<LikeResponse> likeComment(@RequestBody String commentId) {
//        CustomUserDetails userDetails =
//                (CustomUserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
//        return ResponseEntity.ok().body(commentService.likeComment(userDetails .getUser().getId(), Integer.parseInt(commentId.substring(commentId.length() - 2, commentId.length() - 1))));
//    }

    @PostMapping("/likeComment")
    public ResponseEntity<LikeResponse> likeComment(@RequestBody @Valid LikeCommentRequest request) {
        return ResponseEntity.ok().body(commentService.likeComment(request.getUserId(), request.getCommentId()));
    }

}
