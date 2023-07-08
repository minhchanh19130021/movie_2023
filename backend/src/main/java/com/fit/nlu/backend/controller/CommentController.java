package com.fit.nlu.backend.controller;

import com.fit.nlu.backend.entity.Comment;
import com.fit.nlu.backend.exception.CustomException;
import com.fit.nlu.backend.jwt.JwtTokenProvider;
import com.fit.nlu.backend.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping("/likeComment/{commentId}")
    public ResponseEntity<?> likeComment(@RequestHeader("Authorization") String bearerToken,@PathVariable Integer commentId) {
        Integer userId =tokenProvider.getUserIdFromJWT(bearerToken.substring(7));
        return ResponseEntity.ok().body(commentService.likeComment(userId, commentId));
    }

}
