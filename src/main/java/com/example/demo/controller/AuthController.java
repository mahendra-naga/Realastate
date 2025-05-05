package com.example.demo.controller;

import com.example.demo.model.User;
import com.example.demo.service.UserService;


import jakarta.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
public class AuthController {

    @Autowired
    private UserService userService;

    // ✅ Handle Login Request for Popup Form
    @PostMapping("/login")
    @ResponseBody
    public ResponseEntity<Map<String, Object>> processLogin(
            @RequestParam String emailOrPhone, 
            @RequestParam String password, 
            HttpSession session) {
        
        Map<String, Object> response = new HashMap<>();
        User user = userService.authenticate(emailOrPhone, password);

        if (user != null) {
            session.setAttribute("user", user);
            response.put("success", true);
            response.put("message", "Login successful!");
        } else {
            response.put("success", false);
            response.put("message", "Invalid email/phone or password");
        }
        
        return ResponseEntity.ok(response);
    }

    // ✅ Check if the user is logged in (for frontend)
    @GetMapping("/check-login")
    @ResponseBody
    public ResponseEntity<Map<String, Boolean>> checkLogin(HttpSession session) {
        Map<String, Boolean> response = new HashMap<>();
        response.put("loggedIn", session.getAttribute("user") != null);
        return ResponseEntity.ok(response);
    }
    
    

    @GetMapping("/register")
    public String showRegisterForm(Model model) {
        model.addAttribute("user", new User());
        return "register"; // Ensure this maps to register.html
    }

    @PostMapping("/register")
    public String processRegistration(@ModelAttribute User user, RedirectAttributes redirectAttributes) {
        boolean isRegistered = userService.registerUser(user);
        
        if (isRegistered) {
            redirectAttributes.addFlashAttribute("message", "Registration successful! Please log in.");
            return "redirect:/welcome"; // Redirect to login page after success
        } else {
            redirectAttributes.addFlashAttribute("error", "Phone number already registered!");
            return "redirect:/register"; // Stay on register page if failure
        }
    }


    // ✅ Logout user
 // ✅ Logout user and stay on the Welcome Page (Triggers Login Popup)
    @GetMapping("/logout")
    public String logout(HttpSession session) {
        session.invalidate();
        return "redirect:/welcome"; // ✅ Redirects to welcome page, where login popup will show
    }


    // ✅ Show Welcome Page
    @GetMapping("/welcome")
    public String showWelcomePage() {
        return "welcome"; // ✅ Loads welcome.html
    }
    
}
