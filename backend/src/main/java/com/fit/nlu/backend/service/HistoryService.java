package com.fit.nlu.backend.service;

import com.fit.nlu.backend.entity.WatchHistory;
import com.fit.nlu.backend.repository.HistoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HistoryService {
    @Autowired
    private HistoryRepository repository;

    public void addHistory(WatchHistory history) {
        repository.save(history);
    }

    public List<Integer> getAllHistory(Integer userId) {
        return repository.findAllByUserId(userId);
    }
}
