package com.billsheng.huddlespringmvc.services;

import com.billsheng.huddlespringmvc.models.Game;
import com.billsheng.huddlespringmvc.models.User;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.scheduling.annotation.Scheduled;

import java.util.Date;
import java.util.List;

public interface GameService {
    void apiFetch() throws JSONException;

    List<Game> getAllGames();

    List<Game> getGamesByDate(String date); //should return Game[]

    Game getGameById(int id);

    String getGames(String type, String date);

    void addHomePick(User user, int gameId);

    void addAwayPick(User user, int gameId);

}