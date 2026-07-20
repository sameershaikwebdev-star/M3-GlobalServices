package com.m3global.backend.service;

import com.m3global.backend.dto.LoginRequest;
import com.m3global.backend.dto.LoginResponse;

public interface AuthService {

    LoginResponse login(LoginRequest request);

}