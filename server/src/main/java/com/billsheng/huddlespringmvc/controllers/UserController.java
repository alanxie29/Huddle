package com.billsheng.huddlespringmvc.controllers;

import com.billsheng.huddlespringmvc.models.User;
import com.billsheng.huddlespringmvc.repositories.UserRepository;
import com.billsheng.huddlespringmvc.services.CustomerService;
import com.billsheng.huddlespringmvc.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping(path = "/huddle")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    /*
           SIGN UP
        */
    @PostMapping(path="/signup")
    public @ResponseBody String signup(@RequestParam String email, @RequestParam String password) {
        //get info
        //check if user already exists with email
            //if yes throw error
            //else create the account
        User u1 = new User();
        u1.setEmail(email);
        u1.setPassword(password);
        userRepository.save(u1);
        return "Saved";
    }

    @GetMapping(path = "/all")
    public @ResponseBody Iterable<User> getAllUsers() {
        return userRepository.findAll();
    }

    /*
       LOGIN
    */
    @PostMapping(path = "/login")
    public @ResponseBody String login(@RequestParam String email, @RequestParam String password) {
        //get info
        //check if account exists with email
            //if yes try the password
                //if yes authenticate
                //if not throw error
            //if not throw error
    }

     /*
       PROFILE
    */
     @GetMapping(path="/profile")
    public @ResponseBody Iterable<User> findUserByEmail(String email) {
        return userRepository.findByEmail(email);
     }
}
