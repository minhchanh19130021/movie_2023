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

@RestController
@RequestMapping("/api/order")
@CrossOrigin
public class OrderController {

    @Autowired
    private OrderService orderService;

    @PostMapping("/add")
    public ResponseEntity<Order> createNewReview(@Valid @RequestBody AddOrderRequest addOrderRequest) throws CustomException {
        Order newOrder =  orderService.createNewOrder(addOrderRequest.getOrderId());
        return ResponseEntity.ok().body(newOrder);
    }

    @GetMapping("/checkUserIdInOrder")
    public ResponseEntity<Boolean> getMovieAndMovieDetailBySlug() throws CustomException {
        CustomUserDetails userDetails =
                (CustomUserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        boolean isExist = orderService.findByUserId(userDetails.getUser().getId());
        return ResponseEntity.ok().body(isExist);
    }
}
