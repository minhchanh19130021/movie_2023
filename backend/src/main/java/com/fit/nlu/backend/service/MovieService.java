package com.fit.nlu.backend.service;

import com.fit.nlu.backend.entity.Episode;
import com.fit.nlu.backend.entity.Movie;
import com.fit.nlu.backend.entity.MovieDetail;
import com.fit.nlu.backend.repository.EpisodeRepository;
import com.fit.nlu.backend.repository.MovieDetailsRepository;
import com.fit.nlu.backend.repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
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

    public MovieDetail getMovieDetail(Integer movie_id){
        return movieDetailRepository.findById(movie_id).get();
    }

    public List<Episode> getEpisodesOfMovie(Integer movie_id){
        return episodeRepository.findByMovieId(movie_id);
    }
}
