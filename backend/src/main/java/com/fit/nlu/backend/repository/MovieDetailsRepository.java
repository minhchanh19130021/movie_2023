package com.fit.nlu.backend.repository;

import com.fit.nlu.backend.entity.Movie;
import com.fit.nlu.backend.entity.MovieDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MovieDetailsRepository extends JpaRepository<MovieDetail, Integer> {
}
