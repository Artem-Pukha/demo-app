package com.example.demoapp.repository;

import com.example.demoapp.entity.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ItemRepository extends JpaRepository<Item, Integer> {
    List<Item> getItemsByUserId(Integer id);
    Item getItemById(Integer id);
}
