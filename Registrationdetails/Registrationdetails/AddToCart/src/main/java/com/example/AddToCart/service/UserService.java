package com.example.AddToCart.service;

import com.example.AddToCart.domain.Dish;
import com.example.AddToCart.domain.User;
import com.example.AddToCart.exception.UserAlreadyExistsException;
import com.example.AddToCart.exception.UserNotFound;

import java.util.List;

public interface UserService {

    User registeredDetails(User user) throws UserAlreadyExistsException;

    User saveUserDishList(Dish dish , String userEmail) throws UserNotFound;

    List<Dish> getAllDishes(String userEmail) throws UserNotFound;

    Dish save(Dish dish);
    public User deleteuserDishFromList(String userEmail, String dishName);
}
