package com.example.demoEventManagement.Controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    // Serve login page at root
    @GetMapping("/")
    public String loginPage() {
        return "login.html"; // Spring will serve src/main/resources/static/login.html
    }

    // Serve signup page
    @GetMapping("/signup")
    public String signupPage() {
        return "signup.html";
    }
}
