package com.billsheng.huddlespringmvc.repositories;

import com.billsheng.huddlespringmvc.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

//A repository in Spring architecture is the persistence layer
//A repository annotation is a class that defines a data repository
public interface UserRepository extends JpaRepository<User, Integer> {
}
