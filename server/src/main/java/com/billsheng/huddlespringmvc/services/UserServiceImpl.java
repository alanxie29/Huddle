package com.billsheng.huddlespringmvc.services;

import com.billsheng.huddlespringmvc.models.User;
import com.billsheng.huddlespringmvc.repositories.UserRepository;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.stereotype.Service;

import java.util.Optional;

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
}
