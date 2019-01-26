package com.grokonez.spring.restapi.mongodb.repo;

import com.grokonez.spring.restapi.mongodb.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface UserRepository extends MongoRepository<User, String> {
    public User findByUsername(String username);
}
