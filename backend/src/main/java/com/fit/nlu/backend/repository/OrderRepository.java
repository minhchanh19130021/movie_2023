package com.fit.nlu.backend.repository;

import com.fit.nlu.backend.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends JpaRepository<Order, Integer> {
    boolean existsByUserId(Integer userId);
}
