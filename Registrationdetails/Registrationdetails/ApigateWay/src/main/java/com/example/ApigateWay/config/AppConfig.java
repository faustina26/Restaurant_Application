package com.example.ApigateWay.config;

import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AppConfig {
    @Bean
    public RouteLocator myRoutes(RouteLocatorBuilder builder)
    {
        return builder.routes()
                .route(p->p
                        .path("/api/v1/**")
                        .uri("http://localhost:8086/")
                ).
                route(p->p
                        .path("/api/v3/**")
                        .uri("http://localhost:8088/")
                ).
                route(p->p
                        .path("/api/v4/**")
                        .uri("http://localhost:8089/")

                ).
                 route(p->p
                         .path("/api/v2/**")
                         .uri("http://localhost:8085/")

                 ).
                route(p->p
                        .path("/api/v6/**")
                        .uri("http://localhost:8011/")

                ).
                route(p->p
                        .path("/api/v5/**")
                         .uri("http://localhost:8082/")

                ).
                route(p->p
                        .path("/api/v7/**")
                        .uri("http://localhost:8081/")

                )
                .build();

    }
}






