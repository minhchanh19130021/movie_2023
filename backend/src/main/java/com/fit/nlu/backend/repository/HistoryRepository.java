package com.fit.nlu.backend.repository;

import com.fit.nlu.backend.entity.WatchHistory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HistoryRepository extends JpaRepository<WatchHistory, Integer> {
    List<WatchHistory> findAllByUserId(Integer userId);
}
