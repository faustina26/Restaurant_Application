package com.example.Registrationdetail.proxy;

import com.example.Registrationdetail.domain.User;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(name="user-Authentication",url="localhost:8086")
public interface UserProxy {

    @PostMapping("/api/v1/save")
    public ResponseEntity<?> saveCustomer(@RequestBody User user);




}


