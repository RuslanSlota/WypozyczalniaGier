package org.example.wypozyczalnia.gier;

import org.springframework.data.mongodb.repository.MongoRepository;

interface OrderRepository extends MongoRepository<Order, String> {
}
