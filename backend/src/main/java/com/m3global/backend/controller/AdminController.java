package com.m3global.backend.controller;

import com.m3global.backend.dto.CareerResponse;
import com.m3global.backend.dto.DashboardResponse;
import com.m3global.backend.service.AdminService;
import lombok.RequiredArgsConstructor;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
public class AdminController {

    private final AdminService adminService;

    @GetMapping("/dashboard")
    public ResponseEntity<DashboardResponse> dashboard() {

        return ResponseEntity.ok(adminService.getDashboard());

    }
    @GetMapping("/applications")
public ResponseEntity<List<CareerResponse>> getAllApplications() {
    return ResponseEntity.ok(adminService.getAllApplications());
}
}