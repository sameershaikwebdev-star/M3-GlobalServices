package com.m3global.backend.config;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.m3global.backend.entity.Admin;
import com.m3global.backend.repository.AdminRepository;

@Configuration
public class AdminInitializer {

    @Bean
    CommandLineRunner initAdmin(
            AdminRepository adminRepository,
            PasswordEncoder passwordEncoder) {

        return args -> {

            if (adminRepository.count() == 0) {

                Admin admin = new Admin();

                admin.setEmail("m3globalservicespvtltd@gmail.com");
                admin.setPassword(passwordEncoder.encode("M3-GLOBAL_IAM-ADMIN"));
                 admin.setRole("ADMIN");

                adminRepository.save(admin);

                System.out.println("======================================");
                System.out.println(" Default Admin Created Successfully");
                System.out.println(" Email    : m3globalservicespvtltd@gmail.com");
                System.out.println(" Password : M3-GLOBAL_IAM-ADMIN");
                System.out.println("======================================");
            }
        };
    }
}