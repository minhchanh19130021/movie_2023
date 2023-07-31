package com.fit.nlu.backend.service;

import com.fit.nlu.backend.entity.Order;
import com.fit.nlu.backend.entity.User;
import com.fit.nlu.backend.model.CustomUserDetails;
import com.fit.nlu.backend.repository.OrderRepository;
import org.apache.commons.lang3.time.DateUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Optional;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    public Order createNewOrder(String orderId, int typeOrder) {
        Order order = new Order();
        order.setOrderId(orderId);
        Date date = new Date();
        order.setInsertedDate(date);
        order.setUpdatedDate(date);
        Date expirationDate = getExpirationDateByTypeOrder(typeOrder);
        order.setExpirationDate(expirationDate);
        CustomUserDetails userDetails =
                (CustomUserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        order.setUserId(userDetails.getUser().getId());
        return orderRepository.save(order);
    }

    public Optional<Order> findByUserId(int userId) {
//        return orderRepository.existsByUserId(userId);
        return orderRepository.findByUserId(userId);
    }

    private Date getExpirationDateByTypeOrder(int typeOrder) {
        Date expirationDate = null;
        if (typeOrder == 1) {
            expirationDate = DateUtils.addMonths(new Date(), 1);
        }
        else if (typeOrder == 2) {
            expirationDate = DateUtils.addYears(new Date(), 1);
        }
        else if (typeOrder == 3) {
            expirationDate = DateUtils.addYears(new Date(), 1000);
        }
        return expirationDate;
    }

    public boolean checkExpirationOrder(Order order) throws ParseException {
        Date currentDate = new Date();
        Date expirationDate = order.getExpirationDate();
        if (currentDate.getYear() < expirationDate.getYear()) {
            return true;
        }
        else if (currentDate.getYear() > expirationDate.getYear()) {
            return false;
        }
        else {
            if (currentDate.getMonth() < expirationDate.getMonth()) {
                return true;
            }
            else if (currentDate.getMonth() > expirationDate.getMonth()) {
                return false;
            }
            else {
                return currentDate.getDate() <= expirationDate.getDate();
            }
        }
    }
}
