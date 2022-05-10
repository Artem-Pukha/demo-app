package com.example.demoapp.contorller;

import com.example.demoapp.dto.InputItemDto;
import com.example.demoapp.dto.OutputItemDto;
import com.example.demoapp.entity.Item;
import com.example.demoapp.entity.User;
import com.example.demoapp.repository.ItemRepository;
import com.example.demoapp.repository.UserRepository;
import com.example.demoapp.util.MapperEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/item")
public class ItemController {
    private final ItemRepository itemRepository;
    private final UserRepository userRepository;

    public ItemController(ItemRepository itemRep,
                          UserRepository userRep){
        userRepository = userRep;
        itemRepository = itemRep;
    }

    @PostMapping
    public OutputItemDto saveItem(@RequestBody InputItemDto item){
        Integer userId = item.getUserId();
        String title = item.getTitle();
        User user  = userRepository.getUserById(userId);
        return MapperEntity.toDto(itemRepository.save(new Item(title, user)));
    }

    @GetMapping("/all")
    public List<OutputItemDto> getAllItems(){
        return MapperEntity.toItemDtoList(itemRepository.findAll());
    }

    @GetMapping("/by-user/{id}")
    public List<OutputItemDto> getAllItemsByUserId(@PathVariable Integer id){
        return MapperEntity.toItemDtoList(itemRepository.getItemsByUserId(id));
    }
}
