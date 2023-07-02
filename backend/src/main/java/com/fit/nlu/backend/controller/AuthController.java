package com.fit.nlu.backend.controller;

import com.fit.nlu.backend.entity.User;
import com.fit.nlu.backend.jwt.JwtTokenProvider;
import com.fit.nlu.backend.model.CustomUserDetails;
import com.fit.nlu.backend.request.LoginRequest;
import com.fit.nlu.backend.request.RegisterRequest;
import com.fit.nlu.backend.response.LoginResponse;
import com.fit.nlu.backend.service.UserService;
import com.fit.nlu.backend.utils.CustomException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;
import javax.validation.Valid;
import java.io.UnsupportedEncodingException;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    private UserService userService;

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    private JwtTokenProvider tokenProvider;

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {
        // Valid username and password.
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getUsername(),
                        loginRequest.getPassword()
                )
        );
        // Cause turn on isEnable in UserDetails so user must had been activated can login
        // If don't catch exception that mean this is valid information
        // Set infor authentication into Security Context
        SecurityContextHolder.getContext().setAuthentication(authentication);

        // Return jwt for user.
        String jwt = tokenProvider.generateToken((CustomUserDetails) authentication.getPrincipal());
        LoginResponse responseLogin = new LoginResponse();
        responseLogin.setId(((CustomUserDetails) authentication.getPrincipal()).getUser().getId());
        responseLogin.setEmail(((CustomUserDetails) authentication.getPrincipal()).getUser().getEmail());
        responseLogin.setName(((CustomUserDetails) authentication.getPrincipal()).getUser().getUserName());
        responseLogin.setRole(String.valueOf(((CustomUserDetails) authentication.getPrincipal()).getUser().getRoleId()));
        responseLogin.setJwt(jwt);
        return new ResponseEntity<>(responseLogin, HttpStatus.OK);
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@Valid @RequestBody RegisterRequest registerRequest) throws CustomException, MessagingException, UnsupportedEncodingException {
        if (userService.existsByUsername(registerRequest.getUsername())) {
            throw new CustomException(HttpStatus.UNPROCESSABLE_ENTITY, "Tên người dùng đã tồn tại");
        }
        if (userService.existsByEmail(registerRequest.getEmail())) {
            throw new CustomException(HttpStatus.UNPROCESSABLE_ENTITY, "Email đã tồn tại");
        }

        User user = new User();
        user.setUserName(registerRequest.getUsername());
        user.setEmail(registerRequest.getEmail());
        user.setPassword(registerRequest.getPassword());
        user.setFlagActive(false);
        userService.register(user);
        return ResponseEntity.ok().body("User registered successfully!");
    }
    @GetMapping(value="/verify")
    public ResponseEntity<?> confirmUserAccount(@RequestParam("code")String confirmationCode, @RequestParam("email") String email) {
        userService.confirmEmail(confirmationCode, email);
        return ResponseEntity.ok().body("User verified successfully!");
    }
}