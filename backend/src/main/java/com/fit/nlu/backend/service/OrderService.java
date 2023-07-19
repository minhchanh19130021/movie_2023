package com.fit.nlu.backend.service;

import com.fit.nlu.backend.entity.Order;
import com.fit.nlu.backend.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    public Order createNewOrder(String orderId, int userId) {
        Order order = new Order();
        order.setOrderId(orderId);
        Date date = new Date();
        order.setInsertedDate(date);
        order.setUpdatedDate(date);
        order.setUserId(userId);
        return orderRepository.save(order);
    }

    public boolean findByUserId(int userId) {
        return orderRepository.existsByUserId(userId);
    }

}
