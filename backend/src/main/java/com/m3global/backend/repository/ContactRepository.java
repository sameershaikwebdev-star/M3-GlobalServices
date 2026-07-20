package com.m3global.backend.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.m3global.backend.entity.ContactMessage;

public interface ContactRepository extends MongoRepository<ContactMessage, String> {

    long countByReadFalse();
}