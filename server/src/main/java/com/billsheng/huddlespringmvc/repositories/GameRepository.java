package com.billsheng.huddlespringmvc.repositories;

import com.billsheng.huddlespringmvc.models.Game;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GameRepository extends JpaRepository<Game, Integer> {
}
