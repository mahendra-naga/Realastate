package com.example.demo.service;

import com.example.demo.model.User;
import com.example.demo.repository.UserAccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class UserAccountService {

    @Autowired
    private UserAccountRepository userRepository;

    @Autowired
    private JavaMailSender mailSender;

    @Autowired
    private PasswordEncoder passwordEncoder;

    /**
     * Generates a reset token and sends an email.
     */
    public boolean generateResetToken(String email) {
        User user = userRepository.findByEmail(email);
        if (user == null) {
            return false;
        }

        String token = UUID.randomUUID().toString();
        user.setResetToken(token);
        userRepository.save(user);

        String resetLink = "http://localhost:8080/resetpassword?token=" + token;

        sendResetEmail(email, resetLink);
        return true;
    }

    /**
     * Sends a password reset email.
     */
    private void sendResetEmail(String email, String resetLink) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(email);
        message.setSubject("Reset Your Password");
        message.setText("Click the following link to reset your password: " + resetLink);
        mailSender.send(message);
    }

    /**
     * Validates the token and returns the associated user.
     */
    public User validateResetToken(String token) {
        return userRepository.findByResetToken(token);
    }

    /**
     * Resets the user's password.
     */
    public boolean resetPassword(String token, String password, String confirmPassword) {
        if (!password.equals(confirmPassword)) {
            return false;
        }

        User user = userRepository.findByResetToken(token);
        if (user == null) {
            return false;
        }

        user.setPassword(passwordEncoder.encode(password));
        user.setResetToken(null); // Clear the token after successful reset
        userRepository.save(user);
        return true;
    }
}
