package com.example.backend.repository;

import org.springframework.data.repository.CrudRepository;

import com.example.backend.model.Fish; 

public interface FishRepository extends CrudRepository<Fish, Integer>{
    
}
