package com.example.jwtauth;

import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @PostMapping("/login")
    public Map<String, String> login(@RequestBody Map<String, String> user) {

        String username = user.get("username");
        String password = user.get("password");

        // Simple check (for experiment only)
        if ("admin".equals(username) && "1234".equals(password)) {

            String token = JwtUtil.generateToken(username);

            Map<String, String> response = new HashMap<>();
            response.put("token", token);

            return response;
        }

        throw new RuntimeException("Invalid credentials");
    }
}