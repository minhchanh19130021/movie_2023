package com.fit.nlu.backend.service;

import com.fit.nlu.backend.entity.User;
import com.fit.nlu.backend.model.CustomUserDetails;
import com.fit.nlu.backend.repository.UserRepository;
import net.bytebuddy.utility.RandomString;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.io.UnsupportedEncodingException;

@Service
public class UserService implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JavaMailSender mailSender;

    public UserDetails loadUserById(Integer userId) {
        User user = userRepository.findById(userId).orElseThrow(
                () -> new UsernameNotFoundException("User not found with id : " + userId)
        );

        return new CustomUserDetails(user);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUserName(username).orElseThrow(
                () -> new UsernameNotFoundException("User not found with username : " + username)
        );

        return new CustomUserDetails(user);
    }

    public boolean existsByUsername(String username) {
        return userRepository.existsByUserName(username);
    }

    public boolean existsByEmail(String email) {
        return userRepository.existsByEmail(email);
    }

    public void register(User user) throws MessagingException, UnsupportedEncodingException {
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String encodedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(encodedPassword);

        String randomCode = RandomString.make(6);
        user.setActiveCode(randomCode);
        user.setRoleId(1);

        userRepository.save(user);
    }

    public void sendVerificationEmail(User user) throws MessagingException, UnsupportedEncodingException {

        String fromAddress = "MovieNlu@gmail.com";
        String toAddress = user.getEmail();
        String senderName = "Movie Nlu";
        String subject = "Please verify your registration";
        String content = "Dear [[name]],<br>"
                + "Here is your verification code:<br>"
                + "<h3>[[Code]]</h3>"
                + "Thank you,<br>"
                + "Movie Nlu.";

        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message);

        helper.setFrom(fromAddress, senderName);
        helper.setTo(toAddress);
        helper.setSubject(subject);

        content = content.replace("[[name]]", user.getUserName());

        content = content.replace("[[Code]]", user.getActiveCode());

        helper.setText(content, true);

        mailSender.send(message);
    }

    public ResponseEntity<?> confirmEmail(String confirmationCode, String email) {
        User user = userRepository.findByEmail(email);
        if(confirmationCode != null && user.getActiveCode().equals(confirmationCode))
        {
            user.setFlagActive(1);
            userRepository.save(user);
            return ResponseEntity.ok("User verified successfully!");
        }
        return ResponseEntity.badRequest().body("Error: Couldn't verify user");
    }

    public User findById(Integer userId) {
        return userRepository.findById(userId).orElseThrow(
                () -> new UsernameNotFoundException("User not found with id : " + userId)
        );
    }

    public User findByUserName(String username) {
        return userRepository.findByUserName(username).isPresent() ? userRepository.findByUserName(username).get() : null;
    }
}
