package com.billsheng.huddlespringmvc.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.billsheng.huddlespringmvc.domain.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
}
