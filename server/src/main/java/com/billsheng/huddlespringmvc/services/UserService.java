package com.billsheng.huddlespringmvc.services;

import com.billsheng.huddlespringmvc.models.User;

import java.util.Optional;

public interface UserService {
    boolean canAuthenticate();
    Optional<User> findOneByEmail(String email);
}
