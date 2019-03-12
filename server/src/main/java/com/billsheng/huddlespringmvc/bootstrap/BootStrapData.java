package com.billsheng.huddlespringmvc.bootstrap;

import com.billsheng.huddlespringmvc.repositories.CustomerRepository;
import org.springframework.boot.CommandLineRunner;
import com.billsheng.huddlespringmvc.domain.Customer;
import org.springframework.stereotype.Component;

@Component
public class BootStrapData implements CommandLineRunner {

    private final CustomerRepository customerRepository;

    public BootStrapData(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    @Override
    public void run(String... args) throws Exception {

        System.out.println("Loading customer data");

        Customer c1 = new Customer();
        c1.setFirstName("bill");
        c1.setLastName("sheng");
        customerRepository.save(c1);

        System.out.println("Customer saved: " + customerRepository.count());

    }
}
