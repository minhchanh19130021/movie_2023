package com.fit.nlu.backend.config;

import com.fit.nlu.backend.entity.User;
import com.fit.nlu.backend.repository.UserRepository;
import net.bytebuddy.utility.RandomString;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.social.connect.Connection;
import org.springframework.social.connect.ConnectionSignUp;
import org.springframework.stereotype.Service;

@Service
public class FacebookConnectionSignup implements ConnectionSignUp {

    @Autowired
    private UserRepository userRepository;

    @Override
    public String execute(Connection<?> connection) {
        User user = new User();
        user.setUserName(connection.getDisplayName());
        user.setPassword(randomAlphabetic(8));
        userRepository.save(user);
        return user.getUserName();
    }

    private String randomAlphabetic(int i) {
        return RandomString.make(i);
    }
}