package com.fit.nlu.backend.controller;

import com.fit.nlu.backend.entity.Comment;
import com.fit.nlu.backend.entity.Movie;
import com.fit.nlu.backend.entity.MovieDetail;
import com.fit.nlu.backend.exception.CustomException;
import com.fit.nlu.backend.request.MovieCreateRequest;
import com.fit.nlu.backend.response.MoviePageResponse;
import org.springframework.data.domain.Page;
import com.fit.nlu.backend.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@RestController()
@RequestMapping("/api/movies")
@CrossOrigin
public class MovieController {
    @Autowired
    MovieService movieService;

    @GetMapping("/getMovies")
    public ResponseEntity<?> getMovies() {
        return ResponseEntity.ok( movieService.getMovies());
    }
    @GetMapping("/get-movies-non-detail")
    public ResponseEntity<?> getMoviesNoneDetail() {
        return ResponseEntity.ok(movieService.getMoviesNonDetail());
    }

    @GetMapping("/")
    public ResponseEntity<?> getMovies(@RequestParam(defaultValue = "1") int page,
                                       @RequestParam(defaultValue = "3") int size,
                                       @RequestParam(defaultValue = "releaseDate") String sortBy,
                                       @RequestParam(defaultValue = "asc") String sortOrder) {
        Page<Movie> moviePage = movieService.getMovies(page - 1, size, sortBy, sortOrder);
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

    @GetMapping("/search")
    public ResponseEntity<?> searchMovies(
            @RequestParam("keyword") String keyword,
            @RequestParam(value = "page", defaultValue = "0") int page,
            @RequestParam(value = "size", defaultValue = "3") int size,
            @RequestParam(defaultValue = "release_date") String sortBy,
            @RequestParam(defaultValue = "asc") String sortOrder
                                         ) {
        Page<Movie> moviePage = movieService.searchMoviesByName(keyword, page - 1, size, sortBy, sortOrder);
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
    public ResponseEntity<?> getMovieDetail(@PathVariable Integer movie_id) {
        return ResponseEntity.ok(movieService.getMovieDetail(movie_id));
    }

    @GetMapping("/{movie_id}/episodes")
    public ResponseEntity<?> getEpisodesOfMovie(@PathVariable Integer movie_id) {
        return ResponseEntity.ok(movieService.getEpisodesOfMovie(movie_id));
    }

    @PostMapping("/create")
    public ResponseEntity movieCreate(@RequestBody Movie movie) {
        movie.setInsertedDate(new Date());
        movie.setUpdatedDate(new Date());
        movieService.movieCreated(movie);
        return ResponseEntity.ok("Save successfully");
    }

    @PostMapping("/create-movie-detail")
    public ResponseEntity movieDetailCreate(@RequestBody MovieDetail movieDetail) {
        movieDetail.setInsertedDate(new Date());
        movieDetail.setUpdatedDate(new Date());
        movieService.movieDetailCreate(movieDetail);
        return ResponseEntity.ok("Save successfully");
    }

    @GetMapping("/getMoviesInAdmin")
    public ResponseEntity getMoviesInAdmin(String movieName, int offsetPage, int pageSize, String sortBy) throws CustomException {
        List<Movie> movies = movieService.getMoviesInAdminPage(movieName, offsetPage, pageSize, sortBy);
        return ResponseEntity.ok().body(movies);
    }

    @PutMapping("/increaseViewNumberInAMovie")
    public ResponseEntity<Integer> increaseViewNumberInAMovie(int movieId) throws CustomException {
        int newViewNumber = movieService.increaseNumberOfViewsInMovie(movieId);
        return ResponseEntity.ok().body(newViewNumber);
    }

    @GetMapping("/getMovieBySlug/{slug}")
    public ResponseEntity<MovieDetail> getMovieAndMovieDetailBySlug(@PathVariable String slug) throws CustomException {
        MovieDetail movie = movieService.getMovieAndMovieDetailBySlug(slug);
        return ResponseEntity.ok().body(movie);
    }
}
