package com.example.AddToCart.domain;

import org.springframework.data.annotation.Id;

public class Dish {
    @Id
    int dishId;

    String dishName;
    String dishType;
    double dishCost;
    int quantity =1;

    public Dish() {
    }

    @Override
    public String toString() {
        return "Dish{" +
                "dishId=" + dishId +
                ", dishName='" + dishName + '\'' +
                ", dishType='" + dishType + '\'' +
                ", dishCost=" + dishCost +
                ", quantity=" + quantity +
                '}';
    }

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

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public Dish(int dishId, String dishName, String dishType, double dishCost, int quantity) {
        this.dishId = dishId;
        this.dishName = dishName;
        this.dishType = dishType;
        this.dishCost = dishCost;
        this.quantity = quantity;
    }
}