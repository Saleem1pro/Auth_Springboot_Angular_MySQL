package com.transport.demo.mappers;

import com.transport.demo.Entity.User;
import com.transport.demo.dto.UserDto;
import org.mapstruct.Mapper;


@Mapper(componentModel = "spring")
public interface UserMapper {
    UserDto toUserDto(User user);
}
