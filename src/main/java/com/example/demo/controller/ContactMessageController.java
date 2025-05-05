package com.example.demo.controller;

import com.example.demo.model.ContactMessage;
import com.example.demo.service.ContactMessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contact")
public class ContactMessageController {

    @Autowired
    private ContactMessageService contactMessageService;

    @PostMapping("/submit")
    public String submitContactMessage(@RequestBody ContactMessage contactMessage, @RequestParam String source) {
        contactMessage.setSource(source); // ✅ Set form source

        // ✅ If subject is missing (from property page), set it as NULL
        if (source.equals("property_contact")) {
            contactMessage.setSubject(null);
        }

        contactMessageService.saveContactMessage(contactMessage);
        return "Contact message submitted successfully!";
    }
}
