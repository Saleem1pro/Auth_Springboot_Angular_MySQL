package com.transport.demo.repositories;

import com.transport.demo.Entity.User;
import com.transport.demo.dto.UserDto;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByLogin(String login);
}
