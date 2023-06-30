package com.fit.nlu.backend.repository;

import com.fit.nlu.backend.entity.Episode;
import com.fit.nlu.backend.entity.MovieFavorite;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface EpisodeRepository  extends JpaRepository<Episode, Integer> {
    public List<Episode> findByMovieId(Integer movie_id);
}
