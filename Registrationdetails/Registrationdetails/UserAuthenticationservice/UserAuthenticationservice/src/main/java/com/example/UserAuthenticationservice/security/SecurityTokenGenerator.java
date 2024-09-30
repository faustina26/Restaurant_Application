package com.example.UserAuthenticationservice.security;


import com.example.UserAuthenticationservice.domain.User;

import java.util.Map;

public interface SecurityTokenGenerator {
//    String createToken(User user);
    public Map<String,String> createToken(User user);

}
