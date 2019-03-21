package com.billsheng.huddlespringmvc.services;

import com.billsheng.huddlespringmvc.api.Keys;
import com.billsheng.huddlespringmvc.models.Game;
import com.billsheng.huddlespringmvc.models.User;
import com.billsheng.huddlespringmvc.repositories.GameRepository;
import org.apache.tomcat.util.codec.binary.Base64;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@org.springframework.transaction.annotation.Transactional
@Service
public class GameServiceImpl implements GameService {

    GameRepository gameRepository;

    public GameServiceImpl(GameRepository gameRepository) {
        this.gameRepository = gameRepository;
    }

    @Override
    @Scheduled(fixedRate = 10000)
    public void apiFetch() throws JSONException {
        String apiData = this.getGames("2019-playoff", "20190113");
        JSONArray jsonGameArray = new JSONObject(apiData).getJSONArray("games");
        for (int gameCounter = 0; gameCounter < jsonGameArray.length(); gameCounter++) {
            JSONObject gameJson = jsonGameArray.getJSONObject(gameCounter);
            int gameId = gameJson.getJSONObject("schedule").getInt("id");
            Optional<Game> gameFound = this.findOneByGameId(1);
            if(!gameFound.isPresent()) {
                Game game = new Game(gameId,
                        gameJson.getJSONObject("schedule").getJSONObject("homeTeam").getString("abbreviation"),
                        gameJson.getJSONObject("schedule").getJSONObject("awayTeam").getString("abbreviation"), null,
                        gameJson.getJSONObject("schedule").getJSONObject("venue").getString("name"),
                        null, true);
                gameRepository.save(game);
            } else {
                System.out.println("nah");
            }
            //handle games (includes setting inProgress, setting finished)
        }
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
    public Optional<Game> findOneByGameId(int id) {
        Game game = new Game();
        game.setGameId(id);

        ExampleMatcher matcher = ExampleMatcher.matching();
        Example<Game> example = Example.of(game, matcher);
        return gameRepository.findOne(example);



//        User user = new User();
//        user.setEmail(email);
//
//        ExampleMatcher matcher = ExampleMatcher.matching();
//        Example<User> example = Example.of(user, matcher);
//
//        return userRepository.findOne(example);

//        List<Game> allGames = this.getAllGames();
//        return allGames
//                .stream()
//                .filter((game) -> (game.getId().equals(id)))
//                .collect(Collectors.toList()).get(0);
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
        } catch (Exception e) {
            e.printStackTrace();
        }
        return gameData;
    }
}
