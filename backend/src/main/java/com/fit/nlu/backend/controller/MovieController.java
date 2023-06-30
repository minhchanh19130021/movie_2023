package com.fit.nlu.backend.controller;

import com.fit.nlu.backend.entity.Episode;
import com.fit.nlu.backend.entity.MovieDetail;
import com.fit.nlu.backend.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/movies")
public class MovieController {
    @Autowired
    MovieService movieService;

    @GetMapping("/{movie_id}")
    public ResponseEntity<?> getMovieDetail(@PathVariable Integer movie_id){
        return ResponseEntity.ok(movieService.getMovieDetail(movie_id));
    }

    @GetMapping("/{movie_id}/episodes")
    public ResponseEntity<?> getEpisodesOfMovie(@PathVariable Integer movie_id){
        return ResponseEntity.ok(movieService.getEpisodesOfMovie(movie_id));
    }


}
