package com.grokonez.spring.restapi.mongodb.repo;

import com.grokonez.spring.restapi.mongodb.model.Customer;
import com.grokonez.spring.restapi.mongodb.model.User;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;


public interface UserRepository extends MongoRepository<User, String> {
	 public User findByUsername(String username);
	 public Optional<User> findById(String id);
}

