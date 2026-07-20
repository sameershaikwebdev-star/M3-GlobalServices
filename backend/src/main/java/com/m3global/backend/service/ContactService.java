package com.m3global.backend.service;

import java.util.List;

import com.m3global.backend.dto.ContactRequest;
import com.m3global.backend.dto.ContactResponse;

public interface ContactService {

    ContactResponse sendMessage(ContactRequest request);

    List<ContactResponse> getAllMessages();

    ContactResponse getMessageById(String id);

    void deleteMessage(String id);
}