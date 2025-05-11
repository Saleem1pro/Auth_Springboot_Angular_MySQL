package com.transport.demo.services;

import com.transport.demo.Entity.User;
import com.transport.demo.dto.CredentialsDto;
import com.transport.demo.dto.SignUpDto;
import com.transport.demo.dto.UserDto;
import com.transport.demo.exceptions.AppException;
import com.transport.demo.mappers.UserMapper;
import com.transport.demo.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.nio.CharBuffer;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final UserMapper userMapper;

    public UserDto login(CredentialsDto credentialsDto){
       User user = userRepository.findByLogin(credentialsDto.login()).
                orElseThrow(() -> new AppException("Unknown user Sorry", HttpStatus.NOT_FOUND));
        if (passwordEncoder.matches(CharBuffer.wrap(credentialsDto.password()),
                user.getPassword())){
            return userMapper.toUserDto(user);
        }
        throw new AppException("Invalid password", HttpStatus.BAD_REQUEST);
    }
    public UserDto register(SignUpDto signUpDto) {
        Optional<User> oUser = userRepository.findByLogin(signUpDto.login());

        if (oUser.isPresent()) {
            throw new AppException("Login already exists", HttpStatus.BAD_REQUEST);
        }

        // Création manuelle de l'utilisateur
        User user = new User();
        user.setFirstName(signUpDto.firstName());
        user.setLastName(signUpDto.lastName());
        user.setLogin(signUpDto.login());

        // Encodage du mot de passe
        user.setPassword(passwordEncoder.encode(CharBuffer.wrap(signUpDto.password())));

        // Ajout d'autres champs si nécessaire...

        User savedUser = userRepository.save(user);
        return userMapper.toUserDto(savedUser);


    }
}
