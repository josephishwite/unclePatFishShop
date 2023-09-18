package com.example.backend.service;

import java.util.ArrayList;  
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.model.Fish;
import com.example.backend.repository.FishRepository;

@Service
public class FishService {
    
    @Autowired
    FishRepository fishRepository;

    public List<Fish> getAllFishies(){
        List<Fish> fishies = new ArrayList<Fish>();
        this.fishRepository.findAll().forEach(fishies::add);
        return fishies;
    }
    
    public Fish getFishById(int id) {
        return fishRepository.findById(id).get();
    }

    public void saveOrUpdate(Fish fish) {
        Optional<Fish> curFish = fishRepository.findById(fish.getId());
        if (curFish.isPresent()){
            fishRepository.save(fish);
        }
        else{
            Fish newFish = new Fish();
            newFish.setTitle(fish.getTitle());
            newFish.setDetails(fish.getDetails());
            newFish.setImgsrc(fish.getImgsrc());
            newFish.setCount(fish.getCount());
            fishRepository.save(newFish);
        }
    }

    // deleting a specific record
    public void delete(int id) {
        fishRepository.deleteById(id);
    }

}
