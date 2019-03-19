package com.billsheng.huddlespringmvc.controllers;

import com.billsheng.huddlespringmvc.models.Game;
import com.billsheng.huddlespringmvc.models.User;
import com.billsheng.huddlespringmvc.services.GameService;
import org.json.JSONException;
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

    @GetMapping(path = "/{date}")
    public @ResponseBody List<Game> getGamesByDate(@PathVariable String date) {
        return this.gameService.getGamesByDate(date);
    }

    @GetMapping(path = "/all")
    public @ResponseBody List<Game> getAllGames() {
        return this.gameService.getAllGames();
    }

    @GetMapping(path = "/{id}")
    public @ResponseBody Game getGamesByDate(@PathVariable int id) {
        return this.gameService.getGameById(id);
    }

    @GetMapping(path = "/{id}/pick")
    public @ResponseBody void getGamesByDate(@PathVariable int id, @RequestBody User user, @RequestBody boolean pickHome) {
        if(pickHome) {
            gameService.addHomePick(user, id);
        } else {
            gameService.addAwayPick(user, id);
        }
    }

    @GetMapping(path = "/test")
    public @ResponseBody String getGamesByDate() {
        return this.gameService.getGames("2019-playoff", "20190113");
    }
}
