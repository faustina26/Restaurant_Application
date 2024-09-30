package com.FoodServiceDummy.service;

import com.FoodServiceDummy.Exception.RestaurantAlreadyExists;
import com.FoodServiceDummy.Exception.RestaurantNotFound;
import com.FoodServiceDummy.Repository.FoodRepository;
import com.FoodServiceDummy.domain.Restaurant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FoodServiceImpl implements FoodService{
    private FoodRepository foodRepository;

    @Autowired
    public FoodServiceImpl(FoodRepository foodRepository) {
        this.foodRepository = foodRepository;
    }

    @Override
    public Restaurant registerRest(Restaurant restaurant) throws RestaurantAlreadyExists {
        return foodRepository.save(restaurant);
    }

    @Override
    public List<Restaurant> getAllRestaurants() throws RestaurantNotFound {
        return foodRepository.findAll();
    }

    @Override
    public Restaurant getRestaurantForId(int restaurantId) throws RestaurantNotFound {
        return foodRepository.findById(restaurantId).get();
    }
    @Override
    public boolean deleteRestaurantByName(String restaurantName) throws RestaurantNotFound {
        boolean flag = false;

        // Check if the restaurant exists by name
        Optional<Restaurant> restaurantOptional = foodRepository.findByRestaurantName(restaurantName);
        if (restaurantOptional.isPresent()) {
            // If the restaurant exists, delete it
            foodRepository.delete(restaurantOptional.get());
            flag = true;
        } else {
            // If the restaurant does not exist, throw RestaurantNotFound exception
            throw new RestaurantNotFound();
        }

        return flag;
}



}


