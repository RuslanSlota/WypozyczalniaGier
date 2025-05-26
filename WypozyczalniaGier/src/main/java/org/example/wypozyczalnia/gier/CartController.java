package org.example.wypozyczalnia.gier;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/carts")
class CartController {

    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private GameRepository gameRepository;

    @PostMapping("/add")
    public ResponseEntity<?> addToCart(@RequestBody CartItem cartItem, @RequestParam String userId) {
        Cart cart = cartRepository.findByUserId(userId).orElse(new Cart());
        cart.setUserId(userId);
        List<CartItem> items = cart.getItems();
        if (items == null) {
            items = new ArrayList<>();
        }
        items.add(cartItem);
        cart.setItems(items);

        Double totalPrice = items.stream()
                .mapToDouble(item -> {
                    Optional<Game> game = gameRepository.findById(item.getGameId());
                    return game.map(value -> value.getPrice() * item.getQuantity()).orElse(0.0);
                })
                .sum();
        cart.setTotalPrice(totalPrice);

        cartRepository.save(cart);
        return ResponseEntity.ok("Item added to cart.");
    }

    @GetMapping
    public ResponseEntity<?> getCart(@RequestParam String userId) {
        Optional<Cart> cart = cartRepository.findByUserId(userId);
        if (cart.isPresent()) {
            return ResponseEntity.ok(cart.get());
        }
        return ResponseEntity.badRequest().body("Cart not found.");
    }

    @PostMapping("/clear")
    public ResponseEntity<?> clearCart(@RequestParam String userId) {
        Optional<Cart> cart = cartRepository.findByUserId(userId);
        if (cart.isPresent()) {
            cartRepository.delete(cart.get());
            return ResponseEntity.ok("Cart cleared.");
        }
        return ResponseEntity.badRequest().body("Cart not found.");
    }
}
