package FoodService.service;

import FoodService.Exception.RestaurantAlreadyExists;
import FoodService.Exception.RestaurantNotFound;
import FoodService.domain.Dish;
import FoodService.domain.Restaurant;

import java.util.List;

public interface FoodService {

    Restaurant registerRest(Restaurant restaurant) throws RestaurantAlreadyExists;

     List<Restaurant> getAllRestaurants()throws RestaurantNotFound;
    Restaurant getRestaurantForId(int restaurantId) throws RestaurantNotFound;
    List<Restaurant> getRestaurantByName(String restaurantName) throws RestaurantNotFound;
}
