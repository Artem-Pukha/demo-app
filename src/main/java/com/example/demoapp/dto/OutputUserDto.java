package com.example.demoapp.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class OutputUserDto {
    private Integer id;

    private String email;
    private String name;
    private String surname;
}
