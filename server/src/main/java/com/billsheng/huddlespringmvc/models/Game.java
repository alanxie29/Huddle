package com.billsheng.huddlespringmvc.models;

import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Data
@Entity
public class Game {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String homeTeam;
    private String awayTeam;
    private Date date;
    private String location;
    private String bettingOdds;
    private boolean inProgress;
    private boolean isReviewed;

    @OneToMany(cascade = CascadeType.ALL)
    @ElementCollection
    private List<User> homeTeamPicks = new ArrayList<>();

    @OneToMany(cascade = CascadeType.ALL)
    @ElementCollection
    private List<User> awayTeamPicks = new ArrayList<>();

    public boolean isReviewed() {
        return isReviewed;
    }

    public void setReviewed(boolean reviewed) {
        isReviewed = reviewed;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getHomeTeam() {
        return homeTeam;
    }

    public void setHomeTeam(String homeTeam) {
        this.homeTeam = homeTeam;
    }

    public String getAwayTeam() {
        return awayTeam;
    }

    public void setAwayTeam(String awayTeam) {
        this.awayTeam = awayTeam;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getBettingOdds() {
        return bettingOdds;
    }

    public void setBettingOdds(String bettingOdds) {
        this.bettingOdds = bettingOdds;
    }

    public boolean isInProgress() {
        return inProgress;
    }

    public void setInProgress(boolean inProgress) {
        this.inProgress = inProgress;
    }
}
