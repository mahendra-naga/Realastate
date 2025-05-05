package com.example.demo.service;

import com.example.demo.model.ContactMessage;
import com.example.demo.repository.ContactMessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ContactMessageService {

    @Autowired
    private ContactMessageRepository contactMessageRepository;

    public void saveContactMessage(ContactMessage contactMessage) {
        contactMessageRepository.save(contactMessage);
    }
}
