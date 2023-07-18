package com.fit.nlu.backend.repository;

import com.fit.nlu.backend.entity.Movie;
import com.fit.nlu.backend.entity.MovieDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MovieDetailsRepository extends JpaRepository<MovieDetail, Integer> {

    @Query("select md from movie_detail md where md.movie.slug = :movie")
    Optional<MovieDetail> findMovieDetailBySlug(String movie);
}
