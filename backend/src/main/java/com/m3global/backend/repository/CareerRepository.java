package com.m3global.backend.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.m3global.backend.constants.ApplicationStatus;
import com.m3global.backend.entity.CareerApplication;

@Repository
public interface CareerRepository extends MongoRepository<CareerApplication, String> {

    long countByStatus(ApplicationStatus status);
}