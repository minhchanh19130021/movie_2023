package com.fit.nlu.backend.controller;

import com.fit.nlu.backend.entity.MovieDetail;
import com.fit.nlu.backend.entity.Order;
import com.fit.nlu.backend.exception.CustomException;
import com.fit.nlu.backend.model.CustomUserDetails;
import com.fit.nlu.backend.request.AddOrderRequest;
import com.fit.nlu.backend.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.text.ParseException;
import java.util.Optional;

@RestController
@RequestMapping("/api/order")
@CrossOrigin
public class OrderController {

    @Autowired
    private OrderService orderService;

    @PostMapping("/add")
    public ResponseEntity<Order> createNewReview(@Valid @RequestBody AddOrderRequest addOrderRequest) throws CustomException {
        Order newOrder =  orderService.createNewOrder(addOrderRequest.getOrderId(), addOrderRequest.getTypeOrder());
        return ResponseEntity.ok().body(newOrder);
    }

    @GetMapping("/checkUserIdInOrder")
    public ResponseEntity<String> getMovieAndMovieDetailBySlug() throws CustomException, ParseException {
        CustomUserDetails userDetails =
                (CustomUserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Optional<Order> order = orderService.findByUserId(userDetails.getUser().getId());
        if (order.isPresent()) {
            if (orderService.checkExpirationOrder(order.get())) {
                return ResponseEntity.ok().body("ok");
            }
            else {
                return ResponseEntity.ok().body("expiration");
            }
        }
        return ResponseEntity.ok().body("not found");
    }
}
