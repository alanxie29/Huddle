package com.billsheng.huddlespringmvc.controllers;

import com.billsheng.huddlespringmvc.models.Game;
import com.billsheng.huddlespringmvc.services.GameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(path = "/game")
public class GameController {
    @Autowired
    private GameService gameService;

    public GameController(GameService gameService) {
        this.gameService = gameService;
    }

    Game getGamesByDate() {
        return new Game();
    }

    @GetMapping(path = "/api")
    public void getGames() {
        this.gameService.getGamesByDate();
    }
}
