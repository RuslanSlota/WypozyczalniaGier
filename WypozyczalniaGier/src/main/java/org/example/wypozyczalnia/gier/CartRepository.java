package org.example.wypozyczalnia.gier;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

interface CartRepository extends MongoRepository<Cart, String> {
    Optional<Cart> findByUserId(String userId);
}
