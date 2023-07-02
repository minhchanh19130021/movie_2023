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

        String randomCode = RandomString.make(64);
        user.setActiveCode(randomCode);
        user.setRoleId(1);

        userRepository.save(user);
        sendVerificationEmail(user);
    }

    private void sendVerificationEmail(User user) throws MessagingException, UnsupportedEncodingException {

        String fromAddress = "MovieNlu@gmail.com";
        String toAddress = user.getEmail();
        String senderName = "Movie Nlu";
        String subject = "Please verify your registration";
        String content = "Dear [[name]],<br>"
                + "Please click the link below to verify your registration:<br>"
                + "<h3><a href=\"[[URL]]\" target=\"_self\">VERIFY</a></h3>"
                + "Thank you,<br>"
                + "Movie Nlu.";

        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message);

        helper.setFrom(fromAddress, senderName);
        helper.setTo(toAddress);
        helper.setSubject(subject);

        content = content.replace("[[name]]", user.getUserName());
        String verifyURL =  "http://localhost:8080/api/auth/verify?email="+user.getEmail()+"&code=" + user.getActiveCode();

        content = content.replace("[[URL]]", verifyURL);

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
}
