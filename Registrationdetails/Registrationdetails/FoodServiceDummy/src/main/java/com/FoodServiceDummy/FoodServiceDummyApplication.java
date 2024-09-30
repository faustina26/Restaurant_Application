package com.FoodServiceDummy;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@EnableDiscoveryClient
@SpringBootApplication
public class FoodServiceDummyApplication {

	public static void main(String[] args) {
		SpringApplication.run(FoodServiceDummyApplication.class, args);
	}

}
