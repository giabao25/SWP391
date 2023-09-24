package com.example.dung.model;

import jakarta.persistence.*;

@Entity
@Table(name = "user_data")
public class User {
    //primary key
    @Id
    @GeneratedValue
    @Column(name = "SN")
    private int sn; //serial number

    @Column(name = "username")
    private String username;
    @Column(name = "password")
    private String password;
    @Column(name = "roleID")
    private String roleID;

    public User() {
    }

    public User(String username, String password, String roleID) {
        this.username = username;
        this.password = password;
        this.roleID = roleID;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRoleID() {
        return roleID;
    }

    public void setRoleID(String roleID) {
        this.roleID = roleID;
    }

    @Override
    public String toString() {
        return "User{" +
                "username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", roleID='" + roleID + '\'' +
                '}';
    }
}
