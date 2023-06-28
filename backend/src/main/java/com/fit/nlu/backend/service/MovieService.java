package com.fit.nlu.backend.service;

import com.fit.nlu.backend.entity.Movie;
import com.fit.nlu.backend.repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovieService {
    @Autowired
    private MovieRepository repository;

    public List<Movie> findByMovieIds(List<Integer> movieIds) {
        return repository.findAllById(movieIds);
    }
}
