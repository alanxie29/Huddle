package com.billsheng.huddlespringmvc.services;

import com.billsheng.huddlespringmvc.models.Game;
import org.json.JSONObject;
import org.springframework.scheduling.annotation.Scheduled;

import java.util.Date;
import java.util.List;

public interface GameService {
    void apiFetch();

    List<Game> getAllGames();

    List<Game> getGamesByDate(String date); //should return Game[]

    Game getGameById(int id);

    JSONObject getGames(String type, String date);
}