package com.fit.nlu.backend.controller;

import com.fit.nlu.backend.entity.Movie;
import com.fit.nlu.backend.response.MoviePageResponse;
import org.springframework.data.domain.Page;
import com.fit.nlu.backend.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/movies")
public class MovieController {
    @Autowired
    MovieService movieService;
    @GetMapping("/")
    public ResponseEntity<?> getMovies(@RequestParam(defaultValue = "1") int page,
                                       @RequestParam(defaultValue = "3") int size,
                                       @RequestParam(defaultValue = "releaseDate") String sortBy,
                                       @RequestParam(defaultValue = "asc") String sortOrder) {
        Page<Movie> moviePage = movieService.getMovies(page-1, size, sortBy, sortOrder);
        MoviePageResponse response = new MoviePageResponse();
        response.setContent(moviePage.getContent());
        response.setLast(moviePage.isLast());
        response.setFirst(moviePage.isFirst());
        response.setTotalElements(moviePage.getTotalElements());
        response.setTotalPages(moviePage.getTotalPages());
        response.setSize(moviePage.getSize());
        response.setCurrentPage(moviePage.getNumber() + 1);
        return ResponseEntity.ok(response);
    }
    @GetMapping("/{movie_id}")
    public ResponseEntity<?> getMovieDetail(@PathVariable Integer movie_id){
        return ResponseEntity.ok(movieService.getMovieDetail(movie_id));
    }

    @GetMapping("/{movie_id}/episodes")
    public ResponseEntity<?> getEpisodesOfMovie(@PathVariable Integer movie_id){
        return ResponseEntity.ok(movieService.getEpisodesOfMovie(movie_id));
    }


}
