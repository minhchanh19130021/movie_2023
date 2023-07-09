package com.fit.nlu.backend.repository;

import com.fit.nlu.backend.entity.Movie;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Integer> {
    @Query(value = "select * from movie where movie.name like %:name%", nativeQuery = true)
    Page<Movie> searchMoviesByName(@Param("name") String keyword, Pageable pageable);
    @Query(value = "SELECT * FROM movie m LEFT JOIN movie_detail md ON m.id = md.movie_id WHERE " +
            "md.movie_id IS NULL;\n", nativeQuery = true)
    List<Movie> getMoviesNonDetail();


}
