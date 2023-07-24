package com.fit.nlu.backend.service;

import com.fit.nlu.backend.entity.Order;
import com.fit.nlu.backend.model.CustomUserDetails;
import com.fit.nlu.backend.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    public Order createNewOrder(String orderId) {
        Order order = new Order();
        order.setOrderId(orderId);
        Date date = new Date();
        order.setInsertedDate(date);
        order.setUpdatedDate(date);
        CustomUserDetails userDetails =
                (CustomUserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        order.setUserId(userDetails.getUser().getId());
        return orderRepository.save(order);
    }

    public boolean findByUserId(int userId) {
        return orderRepository.existsByUserId(userId);
    }

}
