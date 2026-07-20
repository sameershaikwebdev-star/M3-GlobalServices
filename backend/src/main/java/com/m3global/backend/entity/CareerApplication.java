package com.m3global.backend.entity;

import com.m3global.backend.constants.ApplicationStatus;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.time.LocalDateTime;
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "career_applications")
public class CareerApplication {

    @Id
    private String id;

    private String originalFileName;

    private String storedFileName;

    private String filePath;

    private String fileType;

    private Long fileSize;

    private ApplicationStatus status;

    private LocalDateTime uploadedAt;
}