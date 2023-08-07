package com.fit.nlu.backend.repository;

import com.fit.nlu.backend.entity.Movie;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Lock;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.persistence.LockModeType;
import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Integer> {
    @Query(value = "select * from movie where movie.name like %:name%", nativeQuery = true)
    Page<Movie> searchMoviesByName(@Param("name") String keyword, Pageable pageable);

    @Query(value = "SELECT * FROM movie m LEFT JOIN movie_detail md ON m.id = md.movie_id WHERE " +
            "md.movie_id IS NULL;\n", nativeQuery = true)
    List<Movie> getMoviesNonDetail();

    @Lock(LockModeType.PESSIMISTIC_WRITE)
    Optional<Movie> findWithLockingById(int id);

    @Query(value = "SELECT * FROM movie m ORDER BY m.updated_date desc ", nativeQuery = true)
    List<Movie> suggestionsByUpdatedDate();

    @Query(value = "SELECT * FROM movie m ORDER BY m.inserted_date desc ", nativeQuery = true)
    List<Movie> suggestionsByInsertedDate();

    @Query(value = "select * from movie where movie.type like %:type%", nativeQuery = true)
    Page<Movie> searchMoviesByType(@Param("type") String type, Pageable pageable);


    @Query(value = "SELECT DISTINCT * FROM movie m " +
            "JOIN movie_detail md ON m.id = md.movie_id " +
            "WHERE (:keyword IS NULL OR m.name LIKE %:keyword%) " +
            "AND (COALESCE(:types, 'ALL') = 'ALL' OR m.type IN (:types)) " +
            "AND (COALESCE(:countries, 'ALL') = 'ALL' OR md.country IN (:countries)) " +
            "AND (COALESCE(:directors, 'ALL') = 'ALL' OR md.director IN (:directors)) ", nativeQuery = true)
    Page<Movie> filterMovies(@Param("keyword") String keyword,
                             @Param("types") List<String> types,
                             @Param("countries") List<String> countries,
                             @Param("directors") List<String> directors,
                             Pageable pageable);
    @Query("SELECT m FROM movie m LEFT JOIN movie_detail md ON m.id = md.movieId WHERE md.country" +
            " in :countries or md.director IN :directors")
    Page<Movie> findByCountryInAndDirectorIn(@Param("countries") List<String> countries,
                                             @Param("directors") List<String> directors, Pageable pageable);
}