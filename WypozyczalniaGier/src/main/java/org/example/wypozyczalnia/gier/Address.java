package org.example.wypozyczalnia.gier;

class Address {
    private String street;
    private String streetNumber;
    private String apartmentNumber;
    private String postalCode;
    private String city;

    public void setApartmentNumber(String apartmentNumber) {
        this.apartmentNumber = apartmentNumber;
    }
    public void setCity(String city) {
        this.city = city;
    }
    public void setPostalCode(String postalCode) {
        this.postalCode = postalCode;
    }
    public void setStreet(String street) {
        this.street = street;
    }
    public void setStreetNumber(String streetNumber) {
        this.streetNumber = streetNumber;
    }
    public String getApartmentNumber() {
        return apartmentNumber;
    }
    public String getCity() {
        return city;
    }
    public String getPostalCode() {
        return postalCode;
    }
    public String getStreet() {
        return street;
    }
    public String getStreetNumber() {
        return streetNumber;
    }
}
