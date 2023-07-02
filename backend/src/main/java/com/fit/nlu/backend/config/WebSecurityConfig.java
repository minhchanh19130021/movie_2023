package com.fit.nlu.backend.config;

import com.fit.nlu.backend.jwt.JwtAuthenticationFilter;
import com.fit.nlu.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
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
import org.springframework.social.connect.ConnectionFactoryLocator;
import org.springframework.social.connect.UsersConnectionRepository;
import org.springframework.social.connect.mem.InMemoryUsersConnectionRepository;
import org.springframework.social.connect.support.ConnectionFactoryRegistry;
import org.springframework.social.connect.web.ProviderSignInController;
import org.springframework.social.facebook.connect.FacebookConnectionFactory;

@EnableWebSecurity
@Configuration
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

   @Autowired
   private UserService userService;
    @Autowired
    private FacebookConnectionSignup facebookConnectionSignup;

    @Value("${spring.security.oauth2.client.registration.facebook.client-secret}")
    String appSecret;

    @Value("${spring.security.oauth2.client.registration.facebook.client-id}")
    String appId;

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
    @Bean
    public ProviderSignInController providerSignInController() {
        ConnectionFactoryLocator connectionFactoryLocator =
                connectionFactoryLocator();
        UsersConnectionRepository usersConnectionRepository =
                getUsersConnectionRepository(connectionFactoryLocator);
        ((InMemoryUsersConnectionRepository) usersConnectionRepository)
                .setConnectionSignUp(facebookConnectionSignup);
        return new ProviderSignInController(connectionFactoryLocator,
                usersConnectionRepository, new FacebookSignInAdapter());
    }

    private ConnectionFactoryLocator connectionFactoryLocator() {
        ConnectionFactoryRegistry registry = new ConnectionFactoryRegistry();
        registry.addConnectionFactory(new FacebookConnectionFactory(appId, appSecret));
        return registry;
    }

    private UsersConnectionRepository getUsersConnectionRepository(ConnectionFactoryLocator
                                                                           connectionFactoryLocator) {
        return new InMemoryUsersConnectionRepository(connectionFactoryLocator);
    }
}
