package com.example.demoEventManagement.Controllers;

import com.example.demoEventManagement.Entities.User;
import com.example.demoEventManagement.Repositories.UserRepository;
import lombok.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public AuthController(UserRepository ur, PasswordEncoder pe) {
        userRepository = ur;
        passwordEncoder = pe;
    }

    @PostMapping("/signup")
    public String signup(@RequestBody User user) {
        if(userRepository.existsByEmail(user.getEmail())) {
            return "Email already exists!";
        }

        // Save the role exactly as it comes from frontend
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);
        return "Signup successful";
    }

    @PostMapping("/login")
    public String login(@RequestBody User user) {
        User existing = userRepository.findByEmail(user.getEmail());
        if(existing != null && passwordEncoder.matches(user.getPassword(), existing.getPassword())) {
            return existing.getRole(); // return DB role for frontend redirect
        }
        return "Invalid credentials";
    }
}
