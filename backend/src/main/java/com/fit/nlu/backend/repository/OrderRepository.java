package com.fit.nlu.backend.repository;

import com.fit.nlu.backend.entity.Order;
import com.fit.nlu.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface OrderRepository extends JpaRepository<Order, Integer> {
    Optional<Order> findByUserId(Integer userid);
    boolean existsByUserId(Integer userId);
}
