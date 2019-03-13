package com.billsheng.huddlespringmvc.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.billsheng.huddlespringmvc.models.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
}
