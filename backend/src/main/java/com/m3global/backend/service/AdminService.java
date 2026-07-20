package com.m3global.backend.service;

import java.util.List;

import com.m3global.backend.dto.CareerResponse;
import com.m3global.backend.dto.DashboardResponse;

public interface AdminService {

    DashboardResponse getDashboard();
    List<CareerResponse> getAllApplications();
}