package com.billsheng.huddlespringmvc.domain;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Data
@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String email;
    private String username;
    private String password;
    private String chosenTeam;

    public String getEmail() {
        return email;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    public String getChosenTeam() {
        return chosenTeam;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setChosenTeam(String chosenTeam) {
        this.chosenTeam = chosenTeam;
    }
}
