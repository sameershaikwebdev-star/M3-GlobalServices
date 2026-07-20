package com.m3global.backend.security;

import java.util.Collections;

import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.m3global.backend.entity.Admin;
import com.m3global.backend.repository.AdminRepository;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    private final AdminRepository adminRepository;

    public CustomUserDetailsService(AdminRepository adminRepository) {
        this.adminRepository = adminRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String email)
            throws UsernameNotFoundException {

        Admin admin = adminRepository.findByEmail(email)
                .orElseThrow(() ->
                        new UsernameNotFoundException("Admin not found"));

        return User.builder()
                .username(admin.getEmail())
                .password(admin.getPassword())
                .authorities(
                        Collections.singletonList(
                                new SimpleGrantedAuthority("ROLE_ADMIN")
                        )
                )
                .build();
    }
}