package com.fit.nlu.backend.controller;

import com.fit.nlu.backend.entity.Movie;
import com.fit.nlu.backend.entity.MovieFavorite;
import com.fit.nlu.backend.request.MovieFavoriteRequest;
import com.fit.nlu.backend.service.FavoriteService;
import com.fit.nlu.backend.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/api/favorite")
public class FavoriteController {
    @Autowired
    private FavoriteService favoriteService;

    @Autowired
    private MovieService movieService;

    @PostMapping("/add")
    public ResponseEntity<?> addFavorite(@RequestBody @Valid MovieFavoriteRequest request) {
        MovieFavorite movieFavorite = new MovieFavorite();
        movieFavorite.setMovieId(request.getMovieId());
        movieFavorite.setUserId(request.getUserId());
        movieFavorite.setInsertedDate(new Date());
        movieFavorite.setUpdatedDate(new Date());
        favoriteService.addFavorite(movieFavorite);
        return ResponseEntity.ok().body("Add favorite successfully");
    }

    @PostMapping("/remove")
    public ResponseEntity<?> removeFavorite(@RequestBody @Valid MovieFavoriteRequest request) {
        MovieFavorite movieFavorite = new MovieFavorite();
        movieFavorite.setMovieId(request.getMovieId());
        movieFavorite.setUserId(request.getUserId());
        favoriteService.removeFavorite(movieFavorite);
        return ResponseEntity.ok().body("Remove favorite successfully");
    }

    @GetMapping("/get-all-favorite")
     public ResponseEntity<List<Movie>> getAllFavorite(@RequestParam Integer userId) {
        List<Integer> movieIds = favoriteService.getAllFavorite(userId);
        List<Movie> movies = movieService.findByMovieIds(movieIds);
        return ResponseEntity.ok().body(movies);
    }
}
