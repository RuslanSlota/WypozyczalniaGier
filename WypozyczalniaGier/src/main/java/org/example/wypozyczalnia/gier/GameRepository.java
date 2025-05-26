package org.example.wypozyczalnia.gier;

import org.springframework.data.mongodb.repository.MongoRepository;

interface GameRepository extends MongoRepository<Game, String> {
}
