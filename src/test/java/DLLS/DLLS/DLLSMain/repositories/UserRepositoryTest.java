package DLLS.DLLS.DLLSMain.repositories;

import DLLS.DLLS.DLLSMain.entity.User;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class UserRepositoryTest {
    @Autowired
    private UserRepository userRepository;

    @Test
    void findAll() {
        List<User> list = userRepository.findAll();
        list.forEach((p) -> {
            System.out.println(p.getEmail());
        });
    }

}