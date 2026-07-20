package com.m3global.backend.service.impl;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.stereotype.Service;

import com.m3global.backend.dto.ContactRequest;
import com.m3global.backend.dto.ContactResponse;
import com.m3global.backend.entity.ContactMessage;
import com.m3global.backend.exception.ResourceNotFoundException;
import com.m3global.backend.repository.ContactRepository;
import com.m3global.backend.service.ContactService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ContactServiceImpl implements ContactService {

    private final ContactRepository repository;

    @Override
    public ContactResponse sendMessage(ContactRequest request) {

        ContactMessage message = ContactMessage.builder()
                .name(request.getName())
                .email(request.getEmail())
                .phone(request.getPhone())
                .subject(request.getSubject())
                .message(request.getMessage())
                .createdAt(LocalDateTime.now())
                .build();

        ContactMessage saved = repository.save(message);

        return map(saved);
    }

    @Override
    public List<ContactResponse> getAllMessages() {

        return repository.findAll()
                .stream()
                .map(this::map)
                .toList();
    }

    @Override
    public ContactResponse getMessageById(String id) {

        ContactMessage message = repository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Message not found with id: " + id));

        // Mark as read when admin opens it
        if (!message.isRead()) {
            message.setRead(true);
            message = repository.save(message);
        }

        return map(message);
    }

    @Override
    public void deleteMessage(String id) {

        ContactMessage message = repository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Message not found with id: " + id));

        repository.delete(message);
    }

    private ContactResponse map(ContactMessage message) {

        return ContactResponse.builder()
                .id(message.getId())
                .name(message.getName())
                .email(message.getEmail())
                .phone(message.getPhone())
                .subject(message.getSubject())
                .message(message.getMessage())
                .createdAt(message.getCreatedAt())
                .build();
    }
}