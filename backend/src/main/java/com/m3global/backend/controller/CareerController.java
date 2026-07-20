package com.m3global.backend.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;


import com.m3global.backend.dto.CareerResponse;
import com.m3global.backend.service.CareerService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/careers")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class CareerController {

    private final CareerService careerService;

    /**
     * Upload Resume
     * POST : /api/careers/apply
     */
    @PostMapping(
            value = "/apply",
            consumes = MediaType.MULTIPART_FORM_DATA_VALUE
    )
    public ResponseEntity<CareerResponse> uploadResume(
            @RequestParam("resume") MultipartFile resume
    ) throws IOException {

        CareerResponse response = careerService.uploadResume(resume);

        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    /**
     * Get All Applications
     * GET : /api/careers
     */
    @GetMapping
    public ResponseEntity<List<CareerResponse>> getAllApplications() {

        return ResponseEntity.ok(
                careerService.getAllApplications()
        );
    }

    /**
     * Get Application By ID
     * GET : /api/careers/{id}
     */
    @GetMapping("/{id}")
    public ResponseEntity<CareerResponse> getApplicationById(
            @PathVariable String id
    ) {

        return ResponseEntity.ok(
                careerService.getApplication(id)
        );
    }

    /**
     * Delete Application
     * DELETE : /api/careers/{id}
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteApplication(
            @PathVariable String id
    ) {

        careerService.deleteApplication(id);

        return ResponseEntity.ok("Application deleted successfully.");
    }
    @GetMapping("/{id}/download")
public ResponseEntity<Resource> downloadResume(
        @PathVariable String id) throws IOException {

    Resource resource = careerService.downloadResume(id);

    return ResponseEntity.ok()
            .header(
                HttpHeaders.CONTENT_DISPOSITION,
                "attachment; filename=\"" + resource.getFilename() + "\""
            )
            .body(resource);
}

}