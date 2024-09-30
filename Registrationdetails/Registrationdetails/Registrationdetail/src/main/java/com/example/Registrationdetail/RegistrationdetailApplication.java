package com.example.Registrationdetail;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients
public class RegistrationdetailApplication {

	public static void main(String[] args) {
		SpringApplication.run(RegistrationdetailApplication.class, args);
	}

}
