package com.billsheng.huddlespringmvc.services;

import com.billsheng.huddlespringmvc.models.User;

public interface UserService {
    boolean canAuthenticate();
    User findUserByEmail(String email);
}
