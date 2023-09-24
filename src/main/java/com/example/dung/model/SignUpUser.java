package com.example.dung.model;

public class SignUpUser {

    private String suusername;
    private String supassword;
    private String suroleID;

    public SignUpUser() {
    }

    public SignUpUser(String suusername, String supassword, String suroleID) {
        this.suusername = suusername;
        this.supassword = supassword;
        this.suroleID = suroleID;
    }

    public String getSuusername() {
        return suusername;
    }

    public void setSuusername(String suusername) {
        this.suusername = suusername;
    }

    public String getSupassword() {
        return supassword;
    }

    public void setSupassword(String supassword) {
        this.supassword = supassword;
    }

    public String getSuroleID() {
        return suroleID;
    }

    public void setSuroleID(String suroleID) {
        this.suroleID = suroleID;
    }


}
