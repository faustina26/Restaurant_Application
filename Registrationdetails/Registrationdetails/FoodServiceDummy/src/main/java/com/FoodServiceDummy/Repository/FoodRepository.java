package com.FoodServiceDummy.Repository;


import com.FoodServiceDummy.domain.Restaurant;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface FoodRepository extends MongoRepository<Restaurant,Integer> {
    Optional<Restaurant> findByRestaurantName(String restaurantName);
}
