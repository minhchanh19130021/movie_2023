package com.fit.nlu.backend.repository;

import com.fit.nlu.backend.entity.Review;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Integer> {

    Page<Review> findByMovieId(int movieId, Pageable pageable);
}
