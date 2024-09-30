package com.example.AddToCart;

import com.example.AddToCart.filter.JwtFilter;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
@EnableDiscoveryClient
public class AddToCartApplication {

	public static void main(String[] args) {
		SpringApplication.run(AddToCartApplication.class, args);}
		@Bean
		public FilterRegistrationBean jwtFilterBean(){
			FilterRegistrationBean filterRegistrationBean = new FilterRegistrationBean();
			filterRegistrationBean.setFilter(new JwtFilter());
			filterRegistrationBean.addUrlPatterns("/api/v2/user/*");
			return filterRegistrationBean;
		}




	}


