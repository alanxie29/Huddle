package com.billsheng.huddlespringmvc.controllers;

import com.billsheng.huddlespringmvc.models.Game;
import com.billsheng.huddlespringmvc.services.GameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.json.JSONObject;

import java.util.List;

@Controller
@RequestMapping(path = "/game")
public class GameController {
    @Autowired
    private GameService gameService;

    public GameController(GameService gameService) {
        this.gameService = gameService;
    }

    @GetMapping(path = "/games/{date}")
    public List<Game> getGamesByDate(@PathVariable String date) {
        return this.gameService.getGamesByDate(date);
    }

    @GetMapping(path = "/games/{id}")
    public Game getGamesByDate(@PathVariable int id) {
        return this.gameService.getGameById(id);
    }

    @GetMapping(path = "/games/test")
    public JSONObject getGamesByDate() {
        return this.gameService.getGames("2019-playoff", "20190113");
    }
}
