package com.m3global.backend.service.impl;

import com.m3global.backend.constants.ApplicationStatus;
import com.m3global.backend.dto.CareerResponse;
import com.m3global.backend.entity.CareerApplication;
import com.m3global.backend.repository.CareerRepository;
import com.m3global.backend.service.CareerService;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.*;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class CareerServiceImpl implements CareerService {

    private final CareerRepository careerRepository;

    private static final String UPLOAD_DIR = "uploads/resumes/";

    @Override
    public CareerResponse uploadResume(MultipartFile resume) throws IOException {

        if (resume.isEmpty()) {
            throw new RuntimeException("Resume file is required.");
        }

        String originalFileName = resume.getOriginalFilename();
        String storedFileName = UUID.randomUUID() + "_" + originalFileName;

        Path uploadPath = Paths.get(UPLOAD_DIR);

        if (!Files.exists(uploadPath)) {
            Files.createDirectories(uploadPath);
        }

        Path filePath = uploadPath.resolve(storedFileName);

        Files.copy(resume.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);

        CareerApplication application = CareerApplication.builder()
                .originalFileName(originalFileName)
                .storedFileName(storedFileName)
                .filePath(filePath.toString())
                .fileType(resume.getContentType())
                .fileSize(resume.getSize())
                .status(ApplicationStatus.PENDING)
                .uploadedAt(LocalDateTime.now())
                .build();

        CareerApplication saved = careerRepository.save(application);

        return mapToResponse(saved);
    }

    @Override
    public List<CareerResponse> getAllApplications() {
        return careerRepository.findAll()
                .stream()
                .map(this::mapToResponse)
                .toList();
    }

    @Override
    public CareerResponse getApplication(String id) {
        CareerApplication application = careerRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Application not found."));
        return mapToResponse(application);
    }

    @Override
    public void deleteApplication(String id) {
        CareerApplication application = careerRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Application not found."));

        try {
            Files.deleteIfExists(Paths.get(application.getFilePath()));
        } catch (IOException e) {
            throw new RuntimeException("Unable to delete resume file.");
        }

        careerRepository.delete(application);
    }

    @Override
    public Resource downloadResume(String id) throws IOException {

        CareerApplication application = careerRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Application not found."));

        Path path = Paths.get(application.getFilePath());

        if (!Files.exists(path)) {
            throw new RuntimeException("Resume file not found.");
        }

        return new UrlResource(path.toUri());
    }

    private CareerResponse mapToResponse(CareerApplication application) {
        return CareerResponse.builder()
                .id(application.getId())
                .originalFileName(application.getOriginalFileName())
                .fileType(application.getFileType())
                .fileSize(application.getFileSize())
                .status(application.getStatus())
                .uploadedAt(application.getUploadedAt())
                .build();
    }
}