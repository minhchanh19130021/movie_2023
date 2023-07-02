package com.fit.nlu.backend.repository;

import com.fit.nlu.backend.entity.Movie;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Integer> {
    @Query(value = "select * from Movie m where m.name like %:kw% or \r\n"
            + " m.title like %:kw%  ", nativeQuery = true)
    Page<Movie> searchMoviesByName(@Param("kw") String keyword, Pageable pageable);
}
