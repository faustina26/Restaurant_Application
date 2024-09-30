package com.example.UserAuthenticationservice.repository;


import com.example.UserAuthenticationservice.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, String> {
    User findByUserEmailAndUserPassword(String userEmail, String userPassword);
}
