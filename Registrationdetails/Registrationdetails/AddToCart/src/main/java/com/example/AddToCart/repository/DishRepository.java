package com.example.AddToCart.repository;

import com.example.AddToCart.domain.Dish;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface DishRepository extends MongoRepository<Dish, Long> {
    // Additional methods specific to Dish repository
}
