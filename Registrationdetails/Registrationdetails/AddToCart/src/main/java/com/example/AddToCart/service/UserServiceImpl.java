package com.example.AddToCart.service;

import com.example.AddToCart.domain.Dish;
import com.example.AddToCart.domain.User;
import com.example.AddToCart.exception.UserAlreadyExistsException;
import com.example.AddToCart.exception.UserNotFound;
import com.example.AddToCart.repository.DishRepository;
import com.example.AddToCart.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements  UserService{

 private UserRepository userRepository;
 private DishRepository dishRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository,DishRepository dishRepository) {
        this.dishRepository=dishRepository;
        this.userRepository = userRepository;
    }

    @Override
    public User registeredDetails(User user) throws UserAlreadyExistsException {

   if(userRepository.findById(user.getUserEmail()).isPresent()){
       throw new UserAlreadyExistsException();

   }

  return userRepository.save(user);

    }


    @Override
    public User saveUserDishList(Dish dish, String userEmail) throws UserNotFound {
        Optional<User> userOptional = userRepository.findById(userEmail);

        if (userOptional.isEmpty()) {
            throw new UserNotFound();
        }

        User user = userOptional.get();

        if (user.getDishList() == null) {
            user.setDishList(Arrays.asList(dish));
        } else {
            List<Dish> dishes = user.getDishList();
            dishes.add(dish);
            user.setDishList(dishes);
        }

        return userRepository.save(user);
    }



    @Override
    public List<Dish> getAllDishes(String userEmail) throws UserNotFound {


            if(userRepository.findById(userEmail).isEmpty())
            {
                throw new UserNotFound();
            }
            return userRepository.findById(userEmail).get().getDishList();
        }

    public User deleteuserDishFromList(String userEmail, String dishName)  {
        // Fetch the user from the repository
        Optional<User> optionalUser = userRepository.findById(userEmail);
//        if (optionalUser.isEmpty()) {
//            throw new UserNotFound();
//        }

        // Get the user object from the optional
        User user = optionalUser.get();

        // Get the list of dishes from the user
        List<Dish> dishList = user.getDishList();

        // Remove the dish with the given ID from the list
        boolean dishIdIsPresent = dishList.removeIf(x -> x.getDishName().equals(dishName));
        user.setDishList(dishList);
        // Save the modified user back to the repository
        userRepository.save(user);

        return user;
}
    @Override
    public Dish save(Dish dish) {
        return dishRepository.save(dish);
    }


}

