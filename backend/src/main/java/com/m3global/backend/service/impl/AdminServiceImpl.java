package com.m3global.backend.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.m3global.backend.constants.ApplicationStatus;
import com.m3global.backend.dto.CareerResponse;
import com.m3global.backend.dto.DashboardResponse;
import com.m3global.backend.repository.CareerRepository;
import com.m3global.backend.repository.ContactRepository;
import com.m3global.backend.service.AdminService;
import com.m3global.backend.service.CareerService;

@Service
public class AdminServiceImpl implements AdminService {

    private final CareerRepository careerRepository;
    private final ContactRepository contactRepository;
    private final CareerService careerService;

    public AdminServiceImpl(
            CareerRepository careerRepository,
            ContactRepository contactRepository,
            CareerService careerService
    ) {
        this.careerRepository = careerRepository;
        this.contactRepository = contactRepository;
        this.careerService = careerService;
    }

    @Override
    public DashboardResponse getDashboard() {

        long totalApplications = careerRepository.count();
        long pendingApplications = careerRepository.countByStatus(ApplicationStatus.PENDING);
        long totalContacts = contactRepository.count();
        long unreadContacts = contactRepository.countByReadFalse();

        return DashboardResponse.builder()
                .totalApplications(totalApplications)
                .pendingApplications(pendingApplications)
                .totalContacts(totalContacts)
                .unreadContacts(unreadContacts)
                .build();
    }

    @Override
    public List<CareerResponse> getAllApplications() {
        return careerService.getAllApplications();
    }
}
