package com.example.FavouriteCart;

import com.example.FavouriteCart.filter.JwtFilter;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;

@SpringBootApplication


public class FavouriteCartApplication {

	public static void main(String[] args) {
		SpringApplication.run(FavouriteCartApplication.class, args);
	}

	@Bean
	public FilterRegistrationBean jwtFilterBean(){
		FilterRegistrationBean filterRegistrationBean = new FilterRegistrationBean();
		filterRegistrationBean.setFilter(new JwtFilter());
		filterRegistrationBean.addUrlPatterns("/api/v5/user/*");
		return filterRegistrationBean;
	}



}
