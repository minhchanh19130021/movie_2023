package com.fit.nlu.backend.controller;

import com.fit.nlu.backend.entity.Movie;
import com.fit.nlu.backend.entity.WatchHistory;
import com.fit.nlu.backend.request.HistoryRequest;
import com.fit.nlu.backend.service.HistoryService;
import com.fit.nlu.backend.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/api/history")
public class HistoryController {
    @Autowired
    private HistoryService historyService;

    @Autowired
    private MovieService movieService;

    @PostMapping("/add")
    public ResponseEntity<?> addHistory(@Valid @RequestBody HistoryRequest request) {
        WatchHistory history = new WatchHistory();
        history.setMovieId(request.getMovieId());
        history.setUserId(request.getUserId());
        history.setInsertedDate(new Date());
        historyService.addHistory(history);
        return ResponseEntity.ok("Added history");
    }

    @GetMapping("/all")
    public ResponseEntity<?> getAllHistory(@RequestParam Integer userId) {
        List<Integer> movieIds = historyService.getAllHistory(userId);
        List<Movie> movies = movieService.findByMovieIds(movieIds);
        return ResponseEntity.ok(movies);
    }
}
