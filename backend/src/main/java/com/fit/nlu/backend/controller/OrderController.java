package com.fit.nlu.backend.controller;

import com.fit.nlu.backend.entity.MovieDetail;
import com.fit.nlu.backend.entity.Order;
import com.fit.nlu.backend.exception.CustomException;
import com.fit.nlu.backend.request.AddOrderRequest;
import com.fit.nlu.backend.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/order")
@CrossOrigin
public class OrderController {

    @Autowired
    private OrderService orderService;

    @PostMapping("/add")
    public ResponseEntity<Order> createNewReview(@Valid @RequestBody AddOrderRequest addOrderRequest) throws CustomException {
        Order newOrder =  orderService.createNewOrder(addOrderRequest.getOrderId(), addOrderRequest.getUserId());
        return ResponseEntity.ok().body(newOrder);
    }

    @GetMapping("/checkUserIdInOrder/{userId}")
    public ResponseEntity<Boolean> getMovieAndMovieDetailBySlug(@PathVariable int userId) throws CustomException {
        boolean isExist = orderService.findByUserId(userId);
        return ResponseEntity.ok().body(isExist);
    }
}
