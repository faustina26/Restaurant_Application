package com.example.Registrationdetail.proxy;

import com.example.Registrationdetail.domain.User;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(name="FavouriteCart",url="localhost:8082")
public  interface FavouriteProxy {

    @PostMapping("api/v5/register")
    public ResponseEntity<?> registerUser(@RequestBody User user);

}
