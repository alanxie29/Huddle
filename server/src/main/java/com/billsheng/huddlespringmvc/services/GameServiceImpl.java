package com.billsheng.huddlespringmvc.services;

import com.billsheng.huddlespringmvc.api.Keys;
import com.billsheng.huddlespringmvc.models.Game;
import com.billsheng.huddlespringmvc.models.User;
import com.billsheng.huddlespringmvc.repositories.GameRepository;
import org.apache.tomcat.util.codec.binary.Base64;
import org.json.JSONObject;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class GameServiceImpl implements GameService {

    GameRepository gameRepository;

    public GameServiceImpl(GameRepository gameRepository) {
        this.gameRepository = gameRepository;
    }

    @Override
    @Scheduled(fixedRate = 1000) //for testing
//    @Scheduled(fixedRate = ???) run at the beginning of every season
    public void apiFetch() {
//        JSONObject games = this.getGames();
        //for each game
            //save to db
            //handle games (includes setting inProgress, setting finished)
    }

    @Override
    public List<Game> getAllGames() {
        return gameRepository.findAll();
    }

    @Override
    public List<Game> getGamesByDate(String date) {
        List<Game> allGames = this.getAllGames();
        return allGames
                .stream()
                .filter((game) -> game.getDate().equals(date))
                .collect(Collectors.toList());
    }

    @Override
    public Game getGameById(int id) {
        List<Game> allGames = this.getAllGames();
        return allGames
                .stream()
                .filter((game) -> (game.getId().equals(id)))
                .collect(Collectors.toList()).get(0);
    }

    @Override
    public void addHomePick(User user, int gameId) {
        Game selectedGame = gameRepository.getOne(gameId);
        selectedGame.getHomeTeamPicks().add(user);
    }

    @Override
    public void addAwayPick(User user, int gameId) {
        Game selectedGame = gameRepository.getOne(gameId);
        selectedGame.getAwayTeamPicks().add(user);
    }


    @Override
    public String getGames(String type, String date) {
        String gameData = null;
        try {
            URL url = new URL("https://api.mysportsfeeds.com/v2.1/pull/nfl/" + type + "/date/" + date + "/games.json");
            String binaryData = Keys.getAPI_KEY() + ":MYSPORTSFEEDS";
            byte[] authEncBytes = Base64.encodeBase64(binaryData.getBytes());
            String authStringEnc = new String(authEncBytes);
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();
            connection.setRequestMethod("GET");
            connection.setDoOutput(true);
            connection.setRequestProperty("Authorization", "Basic " + authStringEnc);
            InputStream content = connection.getInputStream();
            BufferedReader in = new BufferedReader(new InputStreamReader(content));

            StringBuilder sb = new StringBuilder();

            String line;
            while ((line = in.readLine()) != null) {
                sb.append(line);
            }
            gameData = sb.toString();

            System.out.println(gameData);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return gameData;
    }
}
