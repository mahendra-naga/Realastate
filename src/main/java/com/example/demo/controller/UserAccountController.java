package com.example.demo.controller;

import com.example.demo.model.User;
import com.example.demo.service.UserAccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class UserAccountController { 

    @Autowired
    private UserAccountService userAccountService;

    @GetMapping("/forgotpassword")
    public String forgotPassword() {
        return "forgotpassword";
    }

    @PostMapping("/forgotpassword")
    public String processForgotPassword(@RequestParam("email") String email, Model model) {
        boolean success = userAccountService.generateResetToken(email);
        if (!success) {
            model.addAttribute("error", "Email not found.");
            return "forgotpassword";
        }

        model.addAttribute("message", "A password reset link has been sent to your email.");
        return "forgotpassword";
    }

    @GetMapping("/resetpassword")
    public String showResetPasswordForm(@RequestParam("token") String token, Model model) {
        User user = userAccountService.validateResetToken(token);
        if (user == null) {
            model.addAttribute("error", "Invalid or expired token.");
            return "error"; 
        }

        model.addAttribute("token", token);
        return "resetpassword";
    }

    @PostMapping("/resetpassword")
    public String processResetPassword(
            @RequestParam("token") String token,
            @RequestParam("password") String password,
            @RequestParam("confirmPassword") String confirmPassword,
            Model model) {

        boolean success = userAccountService.resetPassword(token, password, confirmPassword);
        if (!success) {
            model.addAttribute("error", "Invalid token or passwords do not match.");
            model.addAttribute("token", token);
            return "resetpassword";
        }

        model.addAttribute("message", "Password reset successful.");
        return "resetpassword";
    }
}
