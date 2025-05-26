package org.example.wypozyczalnia.gier;

import jakarta.validation.constraints.NotNull;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document(collection = "users")
public class User {
    @Id
    private String id;

    @NotNull
    private String email;

    @NotNull
    private String password;

    private String name;

    private String surname;

    private String phone;

    private String sex;

    private Date dateofbirth;

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getSurname() { return surname; }
    public void setSurname(String surname) { this.surname = surname; }
    public String getPhone() { return phone;}
    public void setPhone(String phone) { this.phone = phone; }
    public String getSex() { return sex;}
    public void setSex(String sex) {this.sex = sex;}
    public void setDateofbirth(Date dateofbirth) {this.dateofbirth = dateofbirth;}
    public Date getDateofbirth() {return dateofbirth;}
}
