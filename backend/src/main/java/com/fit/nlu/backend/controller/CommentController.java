package com.fit.nlu.backend.controller;

import com.fit.nlu.backend.entity.Comment;
import com.fit.nlu.backend.exception.CustomException;
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

    @GetMapping("/get")
    public ResponseEntity<List<Comment>> getCommentsList(int movieId, int currentPage, String sortBy) throws CustomException {
        List<Comment> comments = commentService.getListComment(movieId, currentPage, sortBy);
        return ResponseEntity.ok().body(comments);
    }

}
