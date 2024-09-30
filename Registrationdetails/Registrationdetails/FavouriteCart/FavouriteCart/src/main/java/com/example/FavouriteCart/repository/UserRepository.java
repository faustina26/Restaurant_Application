package com.example.FavouriteCart.repository;


import com.example.FavouriteCart.domain.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends MongoRepository<User,String> {

}
