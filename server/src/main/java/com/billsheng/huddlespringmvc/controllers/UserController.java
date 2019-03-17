package com.billsheng.huddlespringmvc.controllers;

import com.billsheng.huddlespringmvc.models.User;
import com.billsheng.huddlespringmvc.repositories.UserRepository;
import com.billsheng.huddlespringmvc.services.UserService;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@Controller
@RequestMapping(path = "/huddle")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserService userService;

    public UserController(UserRepository userRepository, UserService userService) {
        this.userRepository = userRepository;
        this.userService = userService;
    }

    /*
       SIGN UP
    */
    @PostMapping(path="/signup")
    public @ResponseBody boolean signup(@RequestBody JSONObject request) {
        Optional<User> user = null;
        try {
            user = userService.findOneByEmail(request.getString("email"));
        } catch (JSONException e) {
            e.printStackTrace();
        }
        if(user.isPresent()) {
            return false; //user already exists
        } else {
            try {
                User newUser = new User();
                newUser.setEmail(request.getString("email"));
                newUser.setPassword(request.getString("password"));
                userRepository.save(newUser);
            } catch (Exception e) {
                System.out.println("Failed to create new user " + e);
            }
            return true;
        }
    }

    @GetMapping(path = "/all")
    public @ResponseBody Iterable<User> getAllUsers() {
        return userRepository.findAll();
    }

    /*
       LOGIN
    */
    @PostMapping(path = "/login")
    public @ResponseBody boolean login(@RequestBody String email, @RequestBody String password) {
        Optional<User>  user = userService.findOneByEmail(email);
        try {
            if(user.isPresent() && user.get().getPassword().equals(password)) {
               return true;
            } else {
                return false; //invalid username or password
            }
        } catch (Exception e) {
            System.out.println("Failed to authenticate user " + e);
        }
        return false;
    }

     /*
       PROFILE
    */
     @GetMapping(path="/profile")
    public @ResponseBody Optional<User> findUserByEmail(@RequestBody String email) {
         System.out.println(userService.findOneByEmail(email));
         return userService.findOneByEmail(email);
     }
}

//throws clause is used to declare an exception, it works similar to try-catch block
// throw is used to explicitly throw an exception
