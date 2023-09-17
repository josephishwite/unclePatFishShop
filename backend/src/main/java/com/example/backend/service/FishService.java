package com.example.backend.service;

import java.util.ArrayList;  
import java.util.List;  
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
        fishRepository.save(fish);
    }

    // deleting a specific record
    public void delete(int id) {
        fishRepository.deleteById(id);
    }

}
