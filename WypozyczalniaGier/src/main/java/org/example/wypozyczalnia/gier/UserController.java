package org.example.wypozyczalnia.gier;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/users")
class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        System.out.println("Otrzymano żądanie rejestracji: " + user); // Діагностика

        if (userRepository.findByEmail(user.getEmail()).isPresent()) {
            System.out.println("Email jest już używany: " + user.getEmail()); // Діагностика
            return ResponseEntity.badRequest().body("Email już w użyciu.");
        }
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);
        System.out.println("Użytkownik został zarejestrowany: " + user.getEmail()); // Діагностика

        return ResponseEntity.ok("Rejestracja zakończona sukcesem!");
    }


    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody User loginData) {
        System.out.println("Attempting login for email: " + loginData.getEmail());
        Optional<User> userOptional = userRepository.findByEmail(loginData.getEmail());

        if (userOptional.isPresent()) {
            System.out.println("User found in database.");
            User user = userOptional.get();

            if (passwordEncoder.matches(loginData.getPassword(), user.getPassword())) {
                System.out.println("Password matches.");

                Map<String, Object> response = new HashMap<>();
                response.put("message", "Login successful.");
                response.put("userId", user.getId());
                return ResponseEntity.ok(response);
            } else {
                System.out.println("Password does not match.");
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password.");
            }
        } else {
            System.out.println("User not found.");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password.");
        }
    }


    @GetMapping
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
}
