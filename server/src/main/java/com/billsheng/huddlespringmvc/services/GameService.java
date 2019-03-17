package com.billsheng.huddlespringmvc.services;

import com.billsheng.huddlespringmvc.models.Game;
import org.springframework.scheduling.annotation.Scheduled;

public interface GameService {
    @Scheduled(fixedRate = 3600000)
    Game getGamesByDate(); //should return Game[]

    Game getGameById(int id);

    void callMySportsFeeds();
}
