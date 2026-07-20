package com.m3global.backend.dto;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ContactResponse {

    private String id;

    private String name;

    private String email;

    private String phone;

    private String subject;

    private String message;

    private LocalDateTime createdAt;
}