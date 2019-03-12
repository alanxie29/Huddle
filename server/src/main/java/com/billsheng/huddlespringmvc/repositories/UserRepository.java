package com.billsheng.huddlespringmvc.repositories;

import com.billsheng.huddlespringmvc.domain.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Integer> {
}
