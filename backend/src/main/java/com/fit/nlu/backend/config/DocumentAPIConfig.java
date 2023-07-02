package com.fit.nlu.backend.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.servers.Server;
import org.assertj.core.util.Lists;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DocumentAPIConfig {
    @Bean
    public OpenAPI customOpenAPI() {
        return new OpenAPI()
                .servers(Lists.newArrayList(
                        new Server().url("http://localhost:8080")));
    }
}
