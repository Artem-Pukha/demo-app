package com.example.demoapp.contorller;

import com.example.demoapp.dto.InputUserDto;
import com.example.demoapp.dto.OutputItemDto;
import com.example.demoapp.dto.OutputUserDto;
import com.example.demoapp.entity.User;
import com.example.demoapp.repository.UserRepository;
import com.example.demoapp.util.MapperEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {
    private final UserRepository repository;

    public UserController(UserRepository repository){
        this.repository = repository;
    }

    @PostMapping
    public OutputUserDto createUser(@RequestBody InputUserDto user){
        return MapperEntity.toDto(repository.save(new User(user.getEmail(), user.getName(), user.getSurname())));
    }

    @GetMapping("/{id}")
    public OutputUserDto getUserById(@PathVariable Integer id){
        return MapperEntity.toDto(repository.getUserById(id));
    }

    @GetMapping("/all")
    public List<OutputUserDto> getAllUsers(){
        return MapperEntity.toUserDtoList(repository.findAll());
    }

    @PutMapping("/{id}")
    public void updateUser(@PathVariable Integer id, @RequestBody InputUserDto user){
        User updatable = repository.getUserById(id);
        updatable.setEmail(user.getEmail());
        updatable.setName(user.getName());
        updatable.setSurname(user.getSurname());
        repository.save(updatable);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Integer id){
        repository.deleteById(id);
    }
}
