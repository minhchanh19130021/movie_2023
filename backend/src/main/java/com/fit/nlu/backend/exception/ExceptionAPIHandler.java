package com.fit.nlu.backend.exception;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ExceptionAPIHandler {
    @ExceptionHandler(CustomException.class)
    public ResponseEntity<String> customException(CustomException e) {
        return ResponseEntity.status(e.getStatus()).body(e.getMessage());
    }
}
