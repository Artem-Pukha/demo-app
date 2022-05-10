package com.example.demoapp.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@Table(name = "\"user\"")
@NoArgsConstructor
public class User {

    @Id
    @Column(name = "id_user",nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    private String email;
    @Column(nullable = false)
    private String name;
    @Column(nullable = false)
    private String surname;

    @OneToMany(mappedBy = "user")
    private List<Item> items = new ArrayList<>();


    public User(String email,String name,String surname){
        this.email = email;
        this.name = name;
        this.surname = surname;
    }

    public void addItem(Item item){
        items.add(item);
        item.setUser(this);
    }
}
