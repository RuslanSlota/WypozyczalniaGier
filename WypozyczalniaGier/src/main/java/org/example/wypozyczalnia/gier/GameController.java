package org.example.wypozyczalnia.gier;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/games")
class GameController {

    @Autowired
    private GameRepository gameRepository;

    @PostMapping
    public ResponseEntity<?> addGame(@RequestBody Game game) {
        gameRepository.save(game);
        return ResponseEntity.ok("Game added successfully.");
    }

    @GetMapping
    public List<Game> getAllGames() {
        return gameRepository.findAll();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteGame(@PathVariable String id) {
        gameRepository.deleteById(id);
        return ResponseEntity.ok("Game deleted successfully.");
    }
}
