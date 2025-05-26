package org.example.wypozyczalnia.gier;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "orders")
class Order {
    @Id
    private String id;

    private String userId;
    private String name;
    private String surname;
    private String email;
    private String phone;
    private Address address;
    private String paymentMethod;
    private List<CartItem> items;

    public String getSurname() {
        return surname;
    }

    public Address getAddress() {
        return address;
    }

    public String getPhone() {
        return phone;
    }

    public String getUserId() {
        return userId;
    }

    public String getPaymentMethod() {
        return paymentMethod;
    }

    public List<CartItem> getItems() {
        return items;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public String getId() {
        return id;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPaymentMethod(String paymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    public void setAddress(Address address) {
        this.address = address;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public void setItems(List<CartItem> items) {
        this.items = items;
    }

    public void setId(String id) {
        this.id = id;
    }

    public static class Address {
        private String street;
        private String streetNumber;
        private String apartmentNumber; // Може бути null
        private String postalCode;
        private String city;

        public String getStreet() {return street;}
        public String getPostalCode() {return postalCode;}
        public String getStreetNumber() {return streetNumber;}
        public String getCity() {return city;}
        public String getApartmentNumber() {return apartmentNumber;}
        public void setStreetNumber(String streetNumber) {this.streetNumber = streetNumber;}
        public void setPostalCode(String postalCode) {this.postalCode = postalCode;}
        public void setApartmentNumber(String apartmentNumber) {this.apartmentNumber = apartmentNumber;}
        public void setStreet(String street) {this.street = street;}
        public void setCity(String city) {this.city = city;}
    }
}
