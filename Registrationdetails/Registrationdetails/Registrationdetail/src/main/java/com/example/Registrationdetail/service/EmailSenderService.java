package com.example.Registrationdetail.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailSenderService {
    @Autowired
    private JavaMailSender mailSender;


    public void sendEmail(String userEmail,String subject,String body){


        SimpleMailMessage message=new SimpleMailMessage();
        message.setFrom("vanam.tagore@gmail.com");
        message.setTo(userEmail);
        message.setText(body);
        message.setSubject(subject);

        mailSender.send(message);
        System.out.println("message Send successfully");
    }




}
