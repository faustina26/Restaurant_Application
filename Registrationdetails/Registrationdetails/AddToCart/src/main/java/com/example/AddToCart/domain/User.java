package com.example.AddToCart.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.http.HttpStatusCode;

import java.util.List;

@Document
public class User {


    private String userName;

    @Id
    private String userEmail;
    private String userPassword;

    private  Address address;
    List<Dish> dishList;

    public User(String userName, String userEmail, String userPassword, Address address, List<Dish> dishList) {
        this.userName = userName;
        this.userEmail = userEmail;
        this.userPassword = userPassword;
        this.address = address;
        this.dishList = dishList;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public String getUserPassword() {
        return userPassword;
    }

    public void setUserPassword(String userPassword) {
        this.userPassword = userPassword;
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }

    public List<Dish> getDishList() {
        return dishList;
    }

    public void setDishList(List<Dish> dishList) {
        this.dishList = dishList;
    }

    public User() {
    }

    @Override
    public String toString() {
        return "User{" +
                "userName='" + userName + '\'' +
                ", userEmail='" + userEmail + '\'' +
                ", userPassword='" + userPassword + '\'' +
                ", address=" + address +
                ", dishList=" + dishList +
                '}';
    }
}
