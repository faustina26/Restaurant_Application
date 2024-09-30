package com.example.AddToCart.repository;

import com.example.AddToCart.domain.Dish;
import com.example.AddToCart.domain.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends MongoRepository<User,String> {
}
