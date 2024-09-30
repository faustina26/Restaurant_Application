package com.example.UserAuthenticationservice.service;


import com.example.UserAuthenticationservice.domain.User;
import com.example.UserAuthenticationservice.exception.InvalidCredentialsException;
import com.example.UserAuthenticationservice.exception.UserAlreadyExistsException;

public interface IUserService {
    User saveUser(User user) throws UserAlreadyExistsException;
    User getUserByUserEmailAndUserPassword(String userEmail, String userPassword) throws InvalidCredentialsException;
}
