package com.example.backend.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
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

    Logger logger = LoggerFactory.getLogger(FishController.class);

    @GetMapping("/fish")
    private List<Fish> getAllFishies(){
        logger.info("Getting all fishies");
        return fishService.getAllFishies();
    }

    @GetMapping("/fish/{id}")
    private Fish getFish(@PathVariable("id") int id) {
        logger.info("Getting fish with id:" + id);
        return fishService.getFishById(id);
    }

    @DeleteMapping("/fish/{id}")
    private void deleteFish(@PathVariable("id") int id) {
        logger.info("Deleting fish with id:" + id);
        fishService.delete(id);
    }

    @PostMapping("/fish")
    private int saveFish(@RequestBody Fish fish) {
        logger.info("Saving fish with id:" + fish.getId() + ", title:" + fish.getTitle());
        fishService.saveOrUpdate(fish);
        return fish.getId();
    }
}
