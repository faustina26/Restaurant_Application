package com.FoodServiceDummy.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document
public class Restaurant {
    @Id
    int restaurantId;
    String restaurantName;
    String location;
    String cuisine;
    double rating;
    Address address;
    List<Dish> dishList;

    public Restaurant(int restaurantId, String restaurantName, String location, String cuisine, double rating, Address address, List<Dish> dishList) {
        this.restaurantId = restaurantId;
        this.restaurantName = restaurantName;
        this.location = location;
        this.cuisine = cuisine;
        this.rating = rating;
        this.address = address;
        this.dishList = dishList;
    }

    public int getRestaurantId() {
        return restaurantId;
    }

    public void setRestaurantId(int restaurantId) {
        this.restaurantId = restaurantId;
    }

    public String getRestaurantName() {
        return restaurantName;
    }

    public void setRestaurantName(String restaurantName) {
        this.restaurantName = restaurantName;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getCuisine() {
        return cuisine;
    }

    public void setCuisine(String cuisine) {
        this.cuisine = cuisine;
    }

    public double getRating() {
        return rating;
    }

    public void setRating(double rating) {
        this.rating = rating;
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

    public Restaurant() {
    }

    @Override
    public String toString() {
        return "Restaurant{" +
                "restaurantId=" + restaurantId +
                ", restaurantName='" + restaurantName + '\'' +
                ", location='" + location + '\'' +
                ", cuisine='" + cuisine + '\'' +
                ", rating=" + rating +
                ", address=" + address +
                ", dishList=" + dishList +
                '}';
    }
}
