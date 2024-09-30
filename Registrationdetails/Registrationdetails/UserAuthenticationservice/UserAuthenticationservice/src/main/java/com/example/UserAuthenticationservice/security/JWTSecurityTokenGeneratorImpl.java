package com.example.UserAuthenticationservice.security;
import com.example.UserAuthenticationservice.domain.User;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Service
public class JWTSecurityTokenGeneratorImpl implements SecurityTokenGenerator {
//    public String createToken(User user){
//        Map<String, Object> claims = new HashMap<>();
//        claims.put("userid", user.getUserEmail());
//        return generateToken(claims,user.getUserEmail());
//
//    }
//
//    public String generateToken(Map<String,Object> claims,String subject) {
//        String jwtToken = Jwts.builder().setIssuer("njnj")
//                .setClaims(claims)
//                .setSubject(subject)
//                .setIssuedAt(new Date())
//                .signWith(SignatureAlgorithm.HS256,"mysecret")
//                .compact();
//
//        return jwtToken;

    //}
    public Map<String, String> createToken(User user) {

        Map<String,Object> claims=new HashMap<>();
        claims.put("userEmail",user.getUserEmail());

        return generateToken(claims, user.getUserEmail());
    }

    public Map<String,String> generateToken(Map<String,Object> claims,String subject  ){

        String jwtToken=null;

        jwtToken=Jwts.builder().setIssuer("admin")
                .setClaims(claims)
                .setSubject(subject)
                .setIssuedAt(new Date())
                .signWith(SignatureAlgorithm.HS256,"mySecret")
                .compact();

        Map<String,String> map=new HashMap<>();

        map.put("token",jwtToken);
        map.put("message",String.valueOf(1));
        map.put("username",subject);

        return map;

    }
}
