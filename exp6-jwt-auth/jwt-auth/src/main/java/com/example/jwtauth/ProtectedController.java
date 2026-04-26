package com.example.jwtauth;

import io.jsonwebtoken.Claims;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class ProtectedController {

    @GetMapping("/protected")
    public String protectedRoute(@RequestHeader("Authorization") String authHeader) {

        try {
            String token = authHeader.replace("Bearer ", "");

            Claims claims = JwtUtil.validateToken(token);

            return "Access granted for user: " + claims.getSubject();

        } catch (Exception e) {
            return "Invalid or expired token";
        }
    }
}