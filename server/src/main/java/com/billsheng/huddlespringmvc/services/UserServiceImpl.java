package com.billsheng.huddlespringmvc.services;

import com.billsheng.huddlespringmvc.models.User;
import com.billsheng.huddlespringmvc.repositories.UserRepository;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.stereotype.Service;

import java.util.Optional;

//The class that implements the interface must follow the guidelines stated in the interface
@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public boolean canAuthenticate() {
        return false;
    }

    @Override
    public Optional<User> findOneByEmail(String email) {
        User user = new User();
        user.setEmail(email);

        ExampleMatcher matcher = ExampleMatcher.matching();
        Example<User> example = Example.of(user, matcher);

        return userRepository.findOne(example);
    }

    @Override
    public Iterable<User> findAll() {
        return userRepository.findAll();
    }

    @Override
    public boolean saveUser(User user) {
        boolean userSaved;
        try {
            userRepository.save(user);
            userSaved = true;

        } catch (Exception e) {
            e.printStackTrace();
            userSaved = false;
        }
        return userSaved;
    }
}
