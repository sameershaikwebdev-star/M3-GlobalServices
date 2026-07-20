package com.m3global.backend.entity;

import java.time.LocalDateTime;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "contacts")
public class ContactMessage {

    @Id
    private String id;

    private String name;

    private String email;

    private String phone;

    private String subject;

    private String message;

    private LocalDateTime createdAt;

    @Builder.Default
    private boolean read = false;
}