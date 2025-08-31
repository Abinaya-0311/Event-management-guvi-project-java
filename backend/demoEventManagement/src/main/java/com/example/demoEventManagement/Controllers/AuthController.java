package com.example.demoEventManagement.Controllers;

import com.example.demoEventManagement.Entities.User;
import com.example.demoEventManagement.Services.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/auth")
public class AuthController
{
    private final AuthService authService;

    @Autowired
    public AuthController(AuthService authService)
    {
        this.authService=authService;
    }

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody User user)
    {
        return ResponseEntity.ok(authService.register(user));
    }

    @PostMapping("/login")
    public ResponseEntity<Map<String,String>> login(@RequestBody Map<String,String> req)
    {
        String token= authService.login(req.get("email"),req.get("password"));
        return ResponseEntity.ok(Map.of("token",token));
    }
}
