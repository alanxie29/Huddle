package com.billsheng.huddlespringmvc.repositories;

import com.billsheng.huddlespringmvc.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
}
