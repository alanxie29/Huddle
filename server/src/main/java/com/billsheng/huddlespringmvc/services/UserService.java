package com.billsheng.huddlespringmvc.services;

import com.billsheng.huddlespringmvc.models.Game;
import com.billsheng.huddlespringmvc.models.User;

import java.util.Optional;

//A service in Spring architecture is the service layer
//Services hold business logic and call methods in the repository layer
//An interface holds the skeleton for a java class, it includes parameters, methods names, and return types without detail
//An interface can be implemented a seen in UserServiceImpl
public interface UserService {
    boolean canAuthenticate();

    Optional<User> findOneByEmail(String email);

    Iterable<User> findAll();

    User findById(int id);

    boolean saveUser(User user);

    void updateUserData(int id, Game game, boolean gameWon, boolean gamePlayed);

}
