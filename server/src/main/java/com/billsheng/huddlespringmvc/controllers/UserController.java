package com.billsheng.huddlespringmvc.controllers;

import com.billsheng.huddlespringmvc.models.Game;
import com.billsheng.huddlespringmvc.models.User;
import com.billsheng.huddlespringmvc.repositories.UserRepository;
import com.billsheng.huddlespringmvc.services.UserService;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

//A controller in Spring architecture is the presentation layer
@Controller
@RequestMapping(path = "/user")
public class UserController {

    //This annotation is used to autowire bean on the setter method
    @Autowired
    private UserService userService;

    //Constructor to initialize controller
    public UserController(UserService userService) {
        this.userService = userService;
    }

    /*
       SIGN UP
    */
    @PostMapping(path = "/signup")
    public @ResponseBody boolean signup(@RequestBody String request) {
        Optional<User> user = null; //initializing user variable
        JSONObject reqObj = null; //initializing json variable
        boolean isSignedUp = false;

        try {
            reqObj = new JSONObject(request); //converting request to json and set that to the json variable created above
        } catch (JSONException e) {
            System.out.println("Failed to convert request(String) to JSONObject " + e);
        }

        try {
            user = userService.findOneByEmail(reqObj.getString("email")); //get user by email and set that to the user variable created above
        } catch (JSONException e) {
            System.out.println("Failed to find user with given email " + e);
        }

        if (!user.isPresent()) {
            User newUser = null; //creating new user
            try {
                newUser = new User(reqObj.getString("firstName"), reqObj.getString("lastName"),
                        reqObj.getString("email"), reqObj.getString("password"),
                        reqObj.getString("team"));

            } catch (JSONException e) {
                System.out.println("Failed to set user data from request body " + e);
            }

            userService.saveUser(newUser); //save user to db
            isSignedUp = true; //user successfully created
        }
        return isSignedUp;
    }

    /*
       GET ALL USERS
    */
    @GetMapping(path = "/all")
    public @ResponseBody Iterable<User> getAllUsers() {
        return userService.findAll();
    }

    /*
       LOGIN
    */
    @PostMapping(path = "/login")
    public @ResponseBody boolean login(@RequestBody String request) {
        JSONObject reqObj = null; //initializing json variable
        Optional<User> user = null; //initializing user variable
        boolean isAuthenticated = false;

        try {
            reqObj = new JSONObject(request); //converting request to json and set that to the json variable created above
        } catch (JSONException e) {
            System.out.println("Failed to convert request(String) to JSONObject " + e);
        }

        try {
            user = userService.findOneByEmail(reqObj.getString("email")); //get user by email and set that to the user variable created above
        } catch (JSONException e) {
            System.out.println("Failed to find user with given email " + e);
        }

        try {
            if (user.isPresent() && user.get().getPassword().equals(reqObj.getString("password"))) {
                isAuthenticated = true; //if user exists and has the associated password is correct, user is authenticated
            }
        } catch (Exception e) {
            System.out.println("Failed to authenticate user " + e);
        }
        return isAuthenticated; //return whether or not the user is authenticated
    }

    /*
      PROFILE
    */
    @PostMapping(path = "/profile")
    public @ResponseBody Optional<User> findUserByEmail(@RequestBody String email) {
        JSONObject reqObj = null;
        Optional<User> userFound = null;

        try {
            reqObj = new JSONObject(email);
        } catch (JSONException e) {
            System.out.println("Could not create JSONObject for request " + e);
        }

        try {
            userFound = userService.findOneByEmail(reqObj.getString("email"));
        } catch (JSONException e) {
            System.out.println("Failed to get request user " + e);
        }
        return userFound;
    }

    @PostMapping(path = "/update")
    public @ResponseBody void updateUser(@RequestBody String request) {
        JSONObject reqObj = null;
        Game game = new Game();
        try {
            reqObj = new JSONObject(request);
        } catch (JSONException e) {
            System.out.println("Could not create JSONObject for request " + e);
        }

        try {
            this.userService.updateUserData(reqObj.getInt("id"), game, reqObj.getBoolean("gameWon"), reqObj.getBoolean("gamePlayed"));
        } catch (JSONException e) {
            e.printStackTrace();
        }

    }
}

//throws clause is used to declare an exception, it works similar to try-catch block
//throw is used to explicitly throw an exception


