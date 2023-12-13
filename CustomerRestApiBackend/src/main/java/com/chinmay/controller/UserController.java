package com.chinmay.controller;
import com.chinmay.entity.User;
import com.chinmay.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Optional;
@CrossOrigin(value = "http://localhost:3000", allowCredentials = "true")
@RequestMapping("/user")
@RestController
public class UserController {
    private final UserService userService;
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/signup")
    public ResponseEntity<String> signup(@RequestParam String username, @RequestParam String password) {
        try {
            User newUser = userService.signup(username, password);
            return ResponseEntity.status(HttpStatus.CREATED).body("User with ID " + newUser.getId() + " created successfully");
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    @GetMapping("/signin")
    public ResponseEntity<String> signin(@RequestParam String username, @RequestParam String password) {
        try {
            Boolean authenticationResult = userService.signin(username, password);

            if (authenticationResult) {
                // Authentication successful
                return ResponseEntity.ok("User with username " + username + " logged in successfully");
            } else {
                // Authentication failed
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Authentication failed: Invalid username or password");
            }
        } catch (RuntimeException e) {
            // Handle exceptions
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Authentication failed: " + e.getMessage());
        }
    }

}

