package com.m3global.backend.service;

import java.io.IOException;
import java.util.List;
import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;

import com.m3global.backend.dto.CareerResponse;
public interface CareerService {

    CareerResponse uploadResume(MultipartFile resume) throws IOException;

    List<CareerResponse> getAllApplications();

    CareerResponse getApplication(String id);

    void deleteApplication(String id);

    Resource downloadResume(String id) throws IOException;
}