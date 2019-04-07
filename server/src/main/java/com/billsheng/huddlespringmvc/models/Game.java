package com.billsheng.huddlespringmvc.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import org.json.JSONPropertyIgnore;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Data
@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Game {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private int gameId;
    private String homeTeam;
    private String awayTeam;
    private Date date;
    private String location;
    private String bettingOdds;
    private int homeTeamScore;
    private int awayTeamScore;
    private boolean inProgress;
    private boolean isReviewed;
    private boolean isAdded = false;

    @OneToMany(cascade = CascadeType.ALL)
    @ElementCollection
    private List<User> homeTeamPicks = new ArrayList<>();

    @OneToMany(cascade = CascadeType.ALL)
    @ElementCollection
    private List<User> awayTeamPicks = new ArrayList<>();

    public Game() {
    }

    public Game(int gameId, String homeTeam, String awayTeam, Date date, String location, String bettingOdds, boolean isAdded) {
        this.gameId = gameId;
        this.homeTeam = homeTeam;
        this.awayTeam = awayTeam;
        this.date = date;
        this.location = location;
        this.bettingOdds = bettingOdds;
        this.isAdded = isAdded;
    }

    public int getGameId() {
        return gameId;
    }

    public int getAwayTeamScore() {
        return awayTeamScore;
    }

    public void setAwayTeamScore(int awayTeamScore) {
        this.awayTeamScore = awayTeamScore;
    }

    public void setGameId(int gameId) {
        this.gameId = gameId;
    }

    public boolean isAdded() {
        return isAdded;
    }

    public void setAdded(boolean added) {
        isAdded = added;
    }

    public int getHomeTeamScore() {
        return homeTeamScore;
    }

    public void setHomeTeamScore(int homeTeamScore) {
        this.homeTeamScore = homeTeamScore;
    }

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
