package com.example.Registrationdetail.controller;

import com.example.Registrationdetail.domain.User;
import com.example.Registrationdetail.exception.UserAlreadyExistsException;
import com.example.Registrationdetail.service.EmailSenderService;
import com.example.Registrationdetail.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
//@CrossOrigin("http://localhost:4200")
@RequestMapping("/api/v3")
public class UserController {

    private UserService userService;
    private ResponseEntity responseEntity;

    private final EmailSenderService emailSenderService;

    @Autowired
    public UserController(UserService userService, EmailSenderService emailSenderService) {
        this.userService = userService;
        this.emailSenderService = emailSenderService;
    }


    @PostMapping("/savedata")
    public ResponseEntity<?> SaveCustomerDetails(@RequestBody User user) throws UserAlreadyExistsException {
        try{
            userService.saveAllDetails(user);
            // Sending email after saving user details
            String userEmail = user.getUserEmail(); // Assuming email is stored in User object
            String subject = "Registration Successful";
            String body = "Dear " + user.getUserName() + "Thank you for registering with Bite Bliss.\n" +
                    "Bite bliss is the best guide to explore and experience a wide range of cuisines,restaurants and dishes.\n" +
                    "Explore our services and continue shopping with us.";
            emailSenderService.sendEmail(userEmail, subject, body);





            responseEntity = new ResponseEntity(user , HttpStatus.CREATED);
        }
        catch(UserAlreadyExistsException e){
            throw  new UserAlreadyExistsException();
        }
        return  responseEntity;

    }
    @GetMapping("/fetch")
    public  ResponseEntity<?> fetchCustomerDetails(){


        responseEntity  = new ResponseEntity<>(userService.getAllDetails(), HttpStatus.OK);

        return responseEntity;
    }




}

