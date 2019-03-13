package com.billsheng.huddlespringmvc.repositories;

import com.billsheng.huddlespringmvc.models.Venue;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VenueRepository extends JpaRepository<Venue, Integer> {
}
