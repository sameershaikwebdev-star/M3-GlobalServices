package com.m3global.backend.service.impl;

import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.m3global.backend.dto.LoginRequest;
import com.m3global.backend.dto.LoginResponse;
import com.m3global.backend.entity.Admin;
import com.m3global.backend.repository.AdminRepository;
import com.m3global.backend.security.JwtService;
import com.m3global.backend.service.AuthService;

@Service
public class AuthServiceImpl implements AuthService {

    private final AdminRepository adminRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    public AuthServiceImpl(
            AdminRepository adminRepository,
            PasswordEncoder passwordEncoder,
            JwtService jwtService) {

        this.adminRepository = adminRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
    }

    @Override
    public LoginResponse login(LoginRequest request) {

        Admin admin = adminRepository.findByEmail(request.getEmail())
                .orElseThrow(() ->
                        new BadCredentialsException("Invalid email or password"));

        if (!passwordEncoder.matches(request.getPassword(), admin.getPassword())) {
            throw new BadCredentialsException("Invalid email or password");
        }

        String token = jwtService.generateToken(admin.getEmail());

        return LoginResponse.builder()
                .token(token)
                .email(admin.getEmail())
                .role(admin.getRole())
                .build();
    }
}