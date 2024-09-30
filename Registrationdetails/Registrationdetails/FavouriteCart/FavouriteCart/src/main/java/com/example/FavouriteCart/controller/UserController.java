package com.example.FavouriteCart.controller;

import com.example.FavouriteCart.domain.Dish;
import com.example.FavouriteCart.domain.User;
import com.example.FavouriteCart.exception.UserAlreadyExistsException;
import com.example.FavouriteCart.exception.UserNotFound;
import com.example.FavouriteCart.service.UserService;
import io.jsonwebtoken.Claims;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
@RestController
//@CrossOrigin("http://localhost:4200")
@RequestMapping("/api/v5")
public class UserController {
    private UserService userService;
    private ResponseEntity responseEntity;
    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }


    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User user) throws UserAlreadyExistsException {
        try {
            responseEntity = new ResponseEntity<>(userService.registeredDetails(user), HttpStatus.CREATED);
        } catch (UserAlreadyExistsException e) {
            throw new UserAlreadyExistsException();
        }

        return responseEntity;
    }
//    @PostMapping("/save")
//    public ResponseEntity<?> save(@RequestBody Dish dish){
//        return responseEntity=new ResponseEntity(userService.save(dish),HttpStatus.CREATED);
//    }
    @PostMapping("/user/save")
    public ResponseEntity<?> saveUserDishList(@RequestBody Dish dish, HttpServletRequest request) throws UserNotFound {
        try {
            System.out.println("header" +request.getHeader("Authorization"));
            Claims claims = (Claims) request.getAttribute("claims");
            System.out.println("email from claims :: " + claims.getSubject());
            String email = claims.getSubject();
            System.out.println("email :: "+email);
            responseEntity = new ResponseEntity<>(userService.saveUserDishList(dish,email), HttpStatus.CREATED);
        }
        catch (UserNotFound e)
        {
            throw new UserNotFound();
        }
        return responseEntity;
    }


    @GetMapping("/user/dish")
    public ResponseEntity<?> getAllUserMoviesFromList(HttpServletRequest request) throws  UserNotFound {
        try{
            System.out.println("header" +request.getHeader("Authorization"));
            Claims claims = (Claims) request.getAttribute("claims");
            System.out.println("email from claims :: " + claims.getSubject());
            String email = claims.getSubject();
            System.out.println("email :: "+email);
            responseEntity = new ResponseEntity<>(userService.getAllDishes(email), HttpStatus.OK);
        }
        catch(UserNotFound e)
        {
            throw new UserNotFound();
        }
        return responseEntity;
    }




    @DeleteMapping("user/{dishName}")
    public ResponseEntity deleteromUserList(@PathVariable String dishName, HttpServletRequest request){

        Claims claims = (Claims) request.getAttribute("claims");
        System.out.println("email from claims :: " + claims.getSubject());
        String email = claims.getSubject();
        System.out.println("email :: " + email);

        responseEntity = new ResponseEntity<>(userService.deleteuserDishFromList(email,dishName), HttpStatus.OK);

        return  responseEntity;

    }
}





