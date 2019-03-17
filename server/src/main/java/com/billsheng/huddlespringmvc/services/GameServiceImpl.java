package com.billsheng.huddlespringmvc.services;

import com.billsheng.huddlespringmvc.api.Keys;
import com.billsheng.huddlespringmvc.models.Game;
import org.apache.tomcat.util.codec.binary.Base64;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

@Service
public class GameServiceImpl implements GameService {
    public final String baseURL = "https://api.mysportsfeeds.com/v2.1/pull/nfl/2018-regular/date/20180916/odds_gamelines.json";

    @Override
    public Game getGamesByDate() {
        try {
            URL url = new URL (baseURL);
            String binaryData = Keys.getAPI_KEY() + ":MYSPORTSFEEDS";
            byte[] authEncBytes = Base64.encodeBase64(binaryData.getBytes());
            String authStringEnc = new String(authEncBytes);
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();
            connection.setRequestMethod("GET");
            connection.setDoOutput(true);
            connection.setRequestProperty("Authorization", "Basic " + authStringEnc);
            InputStream content = connection.getInputStream();
            BufferedReader in =
                    new BufferedReader(new InputStreamReader(content));
            String line;
            while ((line = in.readLine()) != null) {
                System.out.println(line);
            }
        } catch(Exception e) {
            e.printStackTrace();
        }

        return new Game();
    }

    @Override
    public Game getGameById(int id) {
        return new Game();
    }

    @Override
    public void callMySportsFeeds() {
//        MySportsFeeds mySportsFeeds = null;
//        try {
//            mySportsFeeds  = new MySportsFeeds(1.2);
//        } catch (VersionNotRecognizedException e) {
//            System.out.println("Unable to create mySportsFeeds API instance " + e);
//        }
//        mySportsFeeds.authenticate("billxsheng", "uganum1");
//        mySportsFeeds.get("NFL", "2018-regular", "scoreboard", "json", "fordate=20180916");
    }
}
