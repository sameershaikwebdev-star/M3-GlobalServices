package com.m3global.backend.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.m3global.backend.entity.Admin;

public interface AdminRepository extends MongoRepository<Admin, String> {

    Optional<Admin> findByEmail(String email);

}