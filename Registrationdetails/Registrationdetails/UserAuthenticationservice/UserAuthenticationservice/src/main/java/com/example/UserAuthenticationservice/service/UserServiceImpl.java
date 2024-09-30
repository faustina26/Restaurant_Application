package com.example.UserAuthenticationservice.service;


import com.example.UserAuthenticationservice.domain.User;
import com.example.UserAuthenticationservice.exception.InvalidCredentialsException;
import com.example.UserAuthenticationservice.exception.UserAlreadyExistsException;
import com.example.UserAuthenticationservice.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class UserServiceImpl implements IUserService {
private UserRepository userRepository;
    // Autowire the UserRepository using constructor autowiring

@Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User saveUser(User user) throws UserAlreadyExistsException {
        if(userRepository.findById(user.getUserEmail()) .isPresent())
        {
            throw new UserAlreadyExistsException();
        }
        System.out.println(user);
        return userRepository.save(user);

    }

    @Override
    public User getUserByUserEmailAndUserPassword(String userEmail, String userPassword) throws InvalidCredentialsException {
        System.out.println("userEmail"+userEmail);
        System.out.println("userPassword"+userPassword);
        User loggedInUser = userRepository.findByUserEmailAndUserPassword(userEmail,userPassword);
        System.out.println(loggedInUser);
        if(loggedInUser == null)
        {
            throw new InvalidCredentialsException();
        }

        return loggedInUser;
    }

}


