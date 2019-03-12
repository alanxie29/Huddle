package com.billsheng.huddlespringmvc.services;

import com.billsheng.huddlespringmvc.domain.Customer;
import java.util.List;

public interface CustomerService {
    Customer findCustomerById(Long id);
    List<Customer> findAllCustomers();
    Customer saveCustomer(Customer customer);
}
