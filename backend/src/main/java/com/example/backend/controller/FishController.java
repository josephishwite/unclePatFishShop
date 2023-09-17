package com.example.backend.controller;

import java.util.List;  
import org.springframework.beans.factory.annotation.Autowired;  
import org.springframework.web.bind.annotation.DeleteMapping;  
import org.springframework.web.bind.annotation.GetMapping;  
import org.springframework.web.bind.annotation.PathVariable;  
import org.springframework.web.bind.annotation.PostMapping;  
import org.springframework.web.bind.annotation.RequestBody;  
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.backend.model.Fish;
import com.example.backend.service.FishService;  

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class FishController {
    @Autowired
    FishService fishService;

    @GetMapping("/fish")
    private List<Fish> getAllFishies(){
        return fishService.getAllFishies();
    }

    @GetMapping("/fish/{id}")
    private Fish getFish(@PathVariable("id") int id) {
        return fishService.getFishById(id);
    }

    @DeleteMapping("/fish/{id}")
    private void deleteFish(@PathVariable("id") int id) {
        fishService.delete(id);
    }

    @PostMapping("/fish")
    private int saveFish(@RequestBody Fish fish) {
        fishService.saveOrUpdate(fish);
        return fish.getId();
    }
}
