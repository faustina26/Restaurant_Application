package com.example.Registrationdetail.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class User {


    private String userName;

    @Id
    private String userEmail;
    private String userPassword;
    private long phoneNumber;
    private Address address;

    public User() {
    }

    public User(String userName, String userEmail, String userPassword, long phoneNumber, Address address) {
        this.userName = userName;
        this.userEmail = userEmail;
        this.userPassword = userPassword;
        this.phoneNumber = phoneNumber;
        this.address = address;
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

    public long getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(long phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }

    @Override
    public String toString() {
        return "User{" +
                "userName='" + userName + '\'' +
                ", userEmail='" + userEmail + '\'' +
                ", userPassword='" + userPassword + '\'' +
                ", phoneNumber=" + phoneNumber +
                ", address=" + address +
                '}';
    }
}


