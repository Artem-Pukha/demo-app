package com.example.demoapp.util;

import com.example.demoapp.dto.OutputItemDto;
import com.example.demoapp.dto.OutputUserDto;
import com.example.demoapp.entity.Item;
import com.example.demoapp.entity.User;

import java.util.ArrayList;
import java.util.List;

public class MapperEntity {
    public static List<OutputUserDto> toUserDtoList(List<User> users){
        List<OutputUserDto> coverted = new ArrayList<>();
        for (User user : users) {
            coverted.add(toDto(user));
        }
        return coverted;
    }

    public static List<OutputItemDto> toItemDtoList(List<Item> items){
        List<OutputItemDto> coverted = new ArrayList<>();
        for (Item item : items) {
            coverted.add(toDto(item));
        }
        return coverted;
    }

    public static OutputUserDto toDto(User user){
        return new OutputUserDto(user.getId(), user.getEmail(), user.getName(), user.getSurname());
    }

    public static OutputItemDto toDto(Item item){
        return new OutputItemDto(item.getId(),item.getTitle());
    }
}
