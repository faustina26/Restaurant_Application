package com.example.Registrationdetail.proxy;

import com.example.Registrationdetail.domain.User;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(name="AddToCart",url="localhost:8085")
public interface CartProxy {

    @PostMapping("api/v2/register")
    public ResponseEntity<?>  registerUser(@RequestBody User user);
}
