package com.FoodServiceDummy.service;

import com.FoodServiceDummy.Exception.RestaurantAlreadyExists;
import com.FoodServiceDummy.Exception.RestaurantNotFound;
import com.FoodServiceDummy.domain.Restaurant;

import java.util.List;

public interface FoodService {

    Restaurant registerRest(Restaurant restaurant) throws RestaurantAlreadyExists;

     List<Restaurant> getAllRestaurants()throws RestaurantNotFound;
    Restaurant getRestaurantForId(int restaurantId) throws RestaurantNotFound;
     boolean deleteRestaurantByName(String restaurantName) throws RestaurantNotFound;
}
