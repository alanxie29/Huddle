package com.billsheng.huddlespringmvc.services;

public interface UserService {
    boolean canAuthenticate();
    boolean userAlreadyExists();
    boolean getUserByEmail();
}
