package com.fit.nlu.backend.config;

import com.fit.nlu.backend.jwt.JwtAuthenticationFilter;
import com.fit.nlu.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.BeanIds;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@EnableWebSecurity
@Configuration
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

   @Autowired
   private UserService userService;


   @Bean
   public JwtAuthenticationFilter jwtAuthenticationFilter() {
       return new JwtAuthenticationFilter();
   }

   @Bean(BeanIds.AUTHENTICATION_MANAGER)
   @Override
   public AuthenticationManager authenticationManagerBean() throws Exception {
       // Get AuthenticationManager bean
       return super.authenticationManagerBean();
   }

   @Bean
   public PasswordEncoder passwordEncoder() {
       // Password encoder, Spring security will use this to encode password
       return new BCryptPasswordEncoder();
   }

   @Override
   protected void configure(AuthenticationManagerBuilder auth)
           throws Exception {
       auth.userDetailsService(userService) // Cung cáp userservice cho spring security
               .passwordEncoder(passwordEncoder()); // cung cấp password encoder
   }


   @Override
   protected void configure(HttpSecurity http) throws Exception {
       http
               .cors() // Prevent request from other domain
               .and()
               .csrf().disable()
               .authorizeRequests()
               // Allow all to access this url
               .anyRequest().permitAll();
//               .antMatchers("/api/movies/**").permitAll()
//               .anyRequest().authenticated(); // All request except 'api/auth/login' must be authenticated
       // Add other classs to check jwt
       http.addFilterBefore(jwtAuthenticationFilter(), UsernamePasswordAuthenticationFilter.class);
   }
}
