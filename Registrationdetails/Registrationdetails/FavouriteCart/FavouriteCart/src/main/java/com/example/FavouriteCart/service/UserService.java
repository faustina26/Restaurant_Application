package com.example.FavouriteCart.service;

import com.example.FavouriteCart.domain.Dish;
import com.example.FavouriteCart.domain.User;
import com.example.FavouriteCart.exception.UserAlreadyExistsException;
import com.example.FavouriteCart.exception.UserNotFound;
import org.springframework.stereotype.Service;

import java.util.List;

public interface UserService {

    User registeredDetails(User user) throws UserAlreadyExistsException;

    User saveUserDishList(Dish dish , String userEmail) throws UserNotFound;

    List<Dish> getAllDishes(String userEmail) throws UserNotFound;


    public User deleteuserDishFromList(String userEmail, String dishName);


}
