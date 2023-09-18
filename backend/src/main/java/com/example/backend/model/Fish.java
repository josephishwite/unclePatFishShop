package com.example.backend.model;

import jakarta.persistence.Column;  
import jakarta.persistence.Entity;  
import jakarta.persistence.Id;  
import jakarta.persistence.Table;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

@Entity
@Table(name = "fish")
public class Fish {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Auto-increment strategy
    @Column
    private int id;

    @Column
    private String title;

    @Column
    private String details;

    @Column
    private String imgsrc;

    @Column
    private int count;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle(){
        return title;
    }
    public void setTitle(String title){
        this.title = title;
    }

    public String getDetails(){
        return details;
    }
    public void setDetails(String details){
        this.details = details;
    }

    public String getImgsrc(){
        return imgsrc;
    }
    public void setImgsrc(String imgsrc){
        this.imgsrc = imgsrc;
    }

    public int getCount(){
        return count;
    }
    public void setCount(int count){
        this.count = count;
    }
}
