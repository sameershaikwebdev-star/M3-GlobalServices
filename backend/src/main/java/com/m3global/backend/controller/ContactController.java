package com.m3global.backend.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.m3global.backend.dto.ContactRequest;
import com.m3global.backend.dto.ContactResponse;
import com.m3global.backend.service.ContactService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/contact")
@RequiredArgsConstructor
public class ContactController {

    private final ContactService service;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ContactResponse sendMessage(
            @Valid @RequestBody ContactRequest request) {

        return service.sendMessage(request);
    }

    @GetMapping
    public List<ContactResponse> getAllMessages() {

        return service.getAllMessages();
    }

    @GetMapping("/{id}")
    public ContactResponse getMessageById(
            @PathVariable String id) {

        return service.getMessageById(id);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteMessage(
            @PathVariable String id) {

        service.deleteMessage(id);
    }
}