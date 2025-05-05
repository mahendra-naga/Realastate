package com.example.demo.service;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;  

    /**
     * Registers a new user if the phone number is not already in use.
     */
    public boolean registerUser(User user) {
        Optional<User> existingUser = userRepository.findByPhone(user.getPhone());
        if (existingUser.isPresent()) {
            return false; // User already exists
        }
        user.setPassword(passwordEncoder.encode(user.getPassword())); // Hash password before saving
        userRepository.save(user);
        return true;
    }

    /**
     * Authenticates a user by checking email/phone and password.
     * Supports login using either email or phone.
     */
    public User authenticate(String emailOrPhone, String password) {
        Optional<User> userOptional = userRepository.findByEmail(emailOrPhone);
        
        if (!userOptional.isPresent()) {
            // If not found by email, try finding by phone
            userOptional = userRepository.findByPhone(emailOrPhone);
        }

        if (userOptional.isPresent()) {
            User user = userOptional.get();
            if (passwordEncoder.matches(password, user.getPassword())) {
                return user; // Successful authentication
            }
        }

        return null; // Authentication failed
    }
}
