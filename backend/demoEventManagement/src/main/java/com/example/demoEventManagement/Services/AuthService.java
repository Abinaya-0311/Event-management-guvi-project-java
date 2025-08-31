package com.example.demoEventManagement.Services;

import com.example.demoEventManagement.Components.JwtUtil;
import com.example.demoEventManagement.Entities.User;
import com.example.demoEventManagement.Repositories.UserRepository;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService
{
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;

    public String register(User user)
    {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);
        return "User registered successfully!";
    }

    public String login(String email,String password)
    {
        User user=userRepository.findByEmail(email);
        if(user!=null && passwordEncoder.matches(password,user.getPassword()))
        {
            return jwtUtil.generateToken(user.getEmail(),user.getRole());
        }
        throw new RuntimeException("Invalid credentials");
    }
}
