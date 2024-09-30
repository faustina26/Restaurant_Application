package com.example.FavouriteCart.domain;

import org.springframework.data.annotation.Id;

public class Dish {

    @Id
    int dishId;

    String dishName;
    String dishType;
    double dishCost;


    public int getDishId() {
        return dishId;
    }

    public void setDishId(int dishId) {
        this.dishId = dishId;
    }

    public String getDishName() {
        return dishName;
    }

    public void setDishName(String dishName) {
        this.dishName = dishName;
    }

    public String getDishType() {
        return dishType;
    }

    public void setDishType(String dishType) {
        this.dishType = dishType;
    }

    public double getDishCost() {
        return dishCost;
    }

    public void setDishCost(double dishCost) {
        this.dishCost = dishCost;
    }

    public Dish(int dishId, String dishName, String dishType, double dishCost) {
        this.dishId = dishId;
        this.dishName = dishName;
        this.dishType = dishType;
        this.dishCost = dishCost;
    }

    public Dish() {
    }

    @Override
    public String toString() {
        return "Dish{" +
                "dishId=" + dishId +
                ", dishName='" + dishName + '\'' +
                ", dishType='" + dishType + '\'' +
                ", dishCost=" + dishCost +
                '}';
    }

}
