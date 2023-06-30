package com.fit.nlu.backend.service;

import com.fit.nlu.backend.entity.Episode;
import com.fit.nlu.backend.entity.Movie;
import com.fit.nlu.backend.entity.MovieDetail;
import com.fit.nlu.backend.repository.EpisodeRepository;
import com.fit.nlu.backend.repository.MovieDetailsRepository;
import com.fit.nlu.backend.repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovieService {
    @Autowired
    private MovieRepository repository;
    @Autowired
    private MovieDetailsRepository movieDetailRepository;
    @Autowired
    private EpisodeRepository episodeRepository;

    public List<Movie> findByMovieIds(List<Integer> movieIds) {
        return repository.findAllById(movieIds);
    }
    public Page<Movie> getMovies(int page, int size, String sortBy, String sortOrder) {
        Sort.Direction sortDirection = sortOrder.equalsIgnoreCase("desc") ? Sort.Direction.DESC : Sort.Direction.ASC;
        Pageable pageable = PageRequest.of(page, size, Sort.by(sortDirection, sortBy));
        return repository.findAll(pageable);
    }
    public MovieDetail getMovieDetail(Integer movie_id){
        return movieDetailRepository.findById(movie_id).get();
    }

    public List<Episode> getEpisodesOfMovie(Integer movie_id){
        return episodeRepository.findByMovieId(movie_id);
    }
}
