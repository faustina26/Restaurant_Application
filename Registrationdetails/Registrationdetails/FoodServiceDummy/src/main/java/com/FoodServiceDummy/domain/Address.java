package com.FoodServiceDummy.domain;


import org.springframework.data.annotation.Id;

public class Address {
    @Id
    String area;
    String state;
    int zipCode;

    @Override
    public String toString() {
        return "Address{" +
                "area='" + area + '\'' +
                ", state='" + state + '\'' +
                ", zipCode=" + zipCode +
                '}';
    }

    public String getArea() {
        return area;
    }

    public void setArea(String area) {
        this.area = area;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public int getZipCode() {
        return zipCode;
    }

    public void setZipCode(int zipCode) {
        this.zipCode = zipCode;
    }

    public Address(String area, String state, int zipCode) {
        this.area = area;
        this.state = state;
        this.zipCode = zipCode;
    }
}
