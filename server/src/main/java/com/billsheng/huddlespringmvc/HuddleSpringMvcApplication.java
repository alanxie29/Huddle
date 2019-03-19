package com.billsheng.huddlespringmvc;

import com.billsheng.huddlespringmvc.services.GameServiceImpl;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@Configuration
@EnableScheduling
public class HuddleSpringMvcApplication {

	public static void main(String[] args) {
		SpringApplication.run(HuddleSpringMvcApplication.class, args);
	}

}

//Spring annotations can be thoought of as metadata for classes
//metadata is a set of daa that describes and ives information about other data
//spring is a framework for dependency-injection which is a pattern that allows to build very decoupled systems
//
