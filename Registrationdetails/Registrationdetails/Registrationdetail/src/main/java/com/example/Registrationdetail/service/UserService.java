package com.example.Registrationdetail.service;

import com.example.Registrationdetail.domain.User;
import com.example.Registrationdetail.exception.UserAlreadyExistsException;
import org.springframework.stereotype.Service;

import java.util.List;

public interface UserService {

    User saveAllDetails(User user) throws UserAlreadyExistsException;
    List<User> getAllDetails();


}


