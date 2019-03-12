package com.billsheng.huddlespringmvc.controllers;

import com.billsheng.huddlespringmvc.domain.User;
import com.billsheng.huddlespringmvc.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping(path = "/huddle")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @PostMapping(path="/add")
    public @ResponseBody String addNewUser(@RequestParam String email, @RequestParam String password) {
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
}
