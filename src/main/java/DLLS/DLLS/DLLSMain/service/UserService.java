package DLLS.DLLS.DLLSMain.service;


import DLLS.DLLS.DLLSMain.entity.User;
import DLLS.DLLS.DLLSMain.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.ReflectionUtils;

import java.lang.reflect.Field;
import java.util.*;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    private List<User> listUser = new ArrayList<>();

    public List<User> getAllUser() {
        listUser = new ArrayList<>();
        listUser = userRepository.findAll();
        return listUser;
    }

    public Optional<User> getUserById(int id) {
        return Optional.of(userRepository.findById(id).get());
    }

    public User addUser(User newUser) {
        userRepository.save(newUser);
        return newUser;
    }

    public User findUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public User updateUserByID(int id, User userUpdate) {
        User existing = userRepository.findById(id).get();
        existing.setEmail(userUpdate.getEmail());
        existing.setPassword(userUpdate.getPassword());
        existing.setRole(userUpdate.getRole());
        existing.setStatus(userUpdate.getStatus());
        return userRepository.save(existing);
    }

    public User updateEachFieldById(int id, Map<String, Objects> fields) {
        Optional<User> existingUser = userRepository.findById(id);
        if (existingUser.isPresent()) {
            fields.forEach((key, value) -> {
                Field field = ReflectionUtils.findField(User.class, key);
                field.setAccessible(true);
                ReflectionUtils.setField(field, existingUser.get(), value);
            });
            return userRepository.save(existingUser.get());
        }
        return null;
    }

    public User updateUserByEmail(String email, User userUpdate) {
        User existing = userRepository.findByEmail(email);
        existing.setEmail(userUpdate.getEmail());
        existing.setPassword(userUpdate.getPassword());
        existing.setRole(userUpdate.getRole());
        existing.setStatus(userUpdate.getStatus());
        return userRepository.save(existing);
    }
}
