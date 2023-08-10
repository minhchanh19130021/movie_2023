package com.fit.nlu.backend.controller;

import com.fit.nlu.backend.entity.Comment;
import com.fit.nlu.backend.entity.User;
import com.fit.nlu.backend.exception.CustomException;
import com.fit.nlu.backend.jwt.JwtTokenProvider;
import com.fit.nlu.backend.repository.UserRepository;
import com.fit.nlu.backend.request.CommentRequest;
import com.fit.nlu.backend.service.CommentService;
import com.fit.nlu.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
    @Autowired
    private UserService userService;

    @GetMapping("/get")
    public ResponseEntity<List<Comment>> getCommentsList(int movieId, int currentPage, String sortBy) throws CustomException {
        List<Comment> comments = commentService.getListComment(movieId, currentPage, sortBy);
        return ResponseEntity.ok().body(comments);
    }

    @PostMapping("/add")
    public ResponseEntity<?> addComment(@RequestHeader("Authorization") String token, @RequestBody CommentRequest commentRequest) {
        Integer userId = tokenProvider.getUserIdFromJWT(token.substring(7));
        if (commentRequest.getReviewText() == null || commentRequest.getReviewText().trim().isEmpty()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Review text must not be blank");
        }

        Comment newComment = new Comment();
        User user = userService.findById(userId);
        newComment.setUser(user);
        newComment.setMovieId(commentRequest.getMovieId());
        newComment.setReviewText(commentRequest.getReviewText());
        newComment.setInsertedDate(new Date());
        newComment.setUpdatedDate(new Date());

        Comment savedComment = commentService.addComment(newComment);
        return ResponseEntity.ok(savedComment);
    }

    @PostMapping("/likeComment/{commentId}")
    public ResponseEntity<?> likeComment(@RequestHeader("Authorization") String bearerToken,@PathVariable Integer commentId) {
        Integer userId =tokenProvider.getUserIdFromJWT(bearerToken.substring(7));
        return ResponseEntity.ok().body(commentService.likeComment(userId, commentId));
    }

}
