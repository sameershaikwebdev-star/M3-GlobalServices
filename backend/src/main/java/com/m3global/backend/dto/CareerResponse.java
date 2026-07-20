package com.m3global.backend.dto;

import java.time.LocalDateTime;

import com.m3global.backend.constants.ApplicationStatus;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CareerResponse {

    private String id;
    private String originalFileName;
    private String fileType;
    private Long fileSize;
    private ApplicationStatus status;
    private LocalDateTime uploadedAt;
}
