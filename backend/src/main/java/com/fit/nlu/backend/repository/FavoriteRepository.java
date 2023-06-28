package com.fit.nlu.backend.repository;

import com.fit.nlu.backend.entity.MovieFavorite;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FavoriteRepository extends JpaRepository<MovieFavorite, Integer> {
    List<Integer> findAllByUserId(Integer userId);
}
