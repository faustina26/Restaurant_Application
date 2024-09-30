package com.example.UserAuthenticationservice.controller;


import com.example.UserAuthenticationservice.domain.User;
import com.example.UserAuthenticationservice.exception.InvalidCredentialsException;
import com.example.UserAuthenticationservice.exception.UserAlreadyExistsException;
import com.example.UserAuthenticationservice.security.SecurityTokenGenerator;
import com.example.UserAuthenticationservice.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
//@CrossOrigin("http://localhost:4200")
@RequestMapping("/api/v1")
public class UserController {
    private IUserService iUserService;
    private SecurityTokenGenerator securityTokenGenerator;

    @Autowired
    public UserController(IUserService iUserService, SecurityTokenGenerator securityTokenGenerator) {
        this.iUserService = iUserService;
        this.securityTokenGenerator = securityTokenGenerator;
    }

    @PostMapping("/save")
    public ResponseEntity<?> saveCustomer(@RequestBody User user) throws UserAlreadyExistsException
    {
        return new ResponseEntity<>(iUserService.saveUser(user),HttpStatus.CREATED);
    }
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) throws InvalidCredentialsException
    {
        User retrievedUser = iUserService.getUserByUserEmailAndUserPassword(user.getUserEmail(),user.getUserPassword());
        if(retrievedUser==null)
        {
            throw new InvalidCredentialsException();
        }
//        String token = securityTokenGenerator.createToken(user);
//        Map<String, String> response = new HashMap<>();
//        response.put("message",String.valueOf(1));
//        response.put("token", token);
        Map<String,String> token= securityTokenGenerator.createToken(user);
        return ResponseEntity.ok(token);

//        return new ResponseEntity<>(token,HttpStatus.OK);
    }
}

