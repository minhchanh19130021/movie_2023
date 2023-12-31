package com.fit.nlu.backend.service;

import com.fit.nlu.backend.entity.MovieFavorite;
import com.fit.nlu.backend.repository.FavoriteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class FavoriteService {
    @Autowired
    private FavoriteRepository repository;

    public void addFavorite(MovieFavorite movieFavorite) {
        repository.save(movieFavorite);
    }

    public void removeFavorite(MovieFavorite movieFavorite) {
        repository.delete(movieFavorite);
    }

    public List<Integer> getAllFavorite(Integer userId) {
        return repository.findAllByUserId(userId).stream().map(x -> x.getMovieId()).collect(Collectors.toList());
    }

    public MovieFavorite findByUserIdAndMovieId(Integer userId, Integer movieId) {
        return repository.findByUserIdAndMovieId(userId, movieId);
    }
}