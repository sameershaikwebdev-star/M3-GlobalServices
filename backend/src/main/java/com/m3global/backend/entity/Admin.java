package com.m3global.backend.entity;

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
@Document(collection = "admins")
public class Admin {

    @Id
    private String id;

    private String email;

    private String password;

    @Builder.Default
    private String role = "ADMIN";
}