package com.example.Registrationdetail.service;

import com.example.Registrationdetail.domain.User;
import com.example.Registrationdetail.exception.UserAlreadyExistsException;
import com.example.Registrationdetail.proxy.CartProxy;
import com.example.Registrationdetail.proxy.FavouriteProxy;
import com.example.Registrationdetail.proxy.UserProxy;
import com.example.Registrationdetail.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class UserServiceImpl implements UserService{

    private UserRepository userRepository;

    private UserProxy userProxy;

    private CartProxy cartProxy;
    private FavouriteProxy favouriteProxy;

    public UserServiceImpl(UserRepository userRepository, UserProxy userProxy, CartProxy cartProxy,FavouriteProxy favouriteProxy) {
        this.userRepository = userRepository;
        this.userProxy = userProxy;
        this.cartProxy = cartProxy;
        this.favouriteProxy=favouriteProxy;
    }

    @Override
    public User saveAllDetails(User user)throws UserAlreadyExistsException {
        if(userRepository.findById(user.getUserEmail()).isPresent()){

            throw new UserAlreadyExistsException();
        }

        User savedUser = userRepository.save(user);
        if(!(savedUser.getUserEmail().isEmpty())) {
            ResponseEntity r = userProxy.saveCustomer(user);
            System.out.println(r.getBody());
        }

        if(!(savedUser.getUserEmail().isEmpty()))
        {
            ResponseEntity a=cartProxy.registerUser(user);
            System.out.println(a.getBody());
        }
      if(!(savedUser.getUserEmail().isEmpty())){

          ResponseEntity c=favouriteProxy.registerUser(user);
          System.out.println(c.getBody());
      }



        return savedUser;
    }

    @Override
    public List<User> getAllDetails() {
        return userRepository.findAll();





    }


}
