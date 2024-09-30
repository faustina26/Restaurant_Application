package com.FoodServiceDummy.Exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND,reason = "Restaurant Not Found")
public class RestaurantNotFound extends Exception{
}
