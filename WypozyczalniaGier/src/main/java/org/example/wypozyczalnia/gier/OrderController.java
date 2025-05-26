package org.example.wypozyczalnia.gier;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/checkout")
class OrderController {

    @Autowired
    private OrderRepository orderRepository;

    // Endpoint для гостей
    @PostMapping("/guest")
    public ResponseEntity<?> processGuestOrder(@RequestBody Order order) {
        if (order.getName() == null || order.getSurname() == null ||
                order.getEmail() == null || order.getPhone() == null ||
                order.getAddress() == null || order.getPaymentMethod() == null) {
            return ResponseEntity.badRequest().body("Wszystkie pola są obowiązkowe.");
        }

        order.setUserId(null); // У гостей немає userId
        orderRepository.save(order);
        return ResponseEntity.ok("Zamówienie gościa zostało pomyślnie zapisane!");
    }

    // Endpoint для зареєстрованих користувачів
    @PostMapping("/registered")
    public ResponseEntity<?> processRegisteredOrder(@RequestBody Order order) {
        if (order.getUserId() == null || order.getAddress() == null || order.getPaymentMethod() == null) {
            return ResponseEntity.badRequest().body("Wszystkie pola są obowiązkowe dla zarejestrowanych użytkowników.");
        }

        orderRepository.save(order);
        return ResponseEntity.ok("Zamówienie zarejestrowanego użytkownika zostało pomyślnie zapisane!");
    }
}
