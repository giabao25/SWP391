package DLLS.DLLS.DLLSMain.controller;

import DLLS.DLLS.DLLSMain.entity.User;
import DLLS.DLLS.DLLSMain.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;

@RestController
@RequestMapping("/students")
public class StudentController {
    @Autowired
    private UserService userService;

    //Lấy tất cả user (đăng nhập) hiển thị ra
    @GetMapping("")
    public List<User> getAllUser() {
        List<User> listUser = userService.getAllUser();
        return listUser;
    }

    //Lấy user có id trong path hiển thị ra
    @GetMapping("/{id}")
    public Optional<User> getUserById(@PathVariable int id) {
        return userService.getUserById(id);
    }

    //Tìm user theo email
    @GetMapping("/getUserByEmail/{email}")
    public User getUserByEmail(@PathVariable String email) {
        return userService.findUserByEmail(email);
    }

    //Thêm User vào database
    @PostMapping("")
    public User addUser(@RequestBody User newUser) {
        return userService.addUser(newUser);
    }

    //Update theo ID
    @PutMapping("/{id}")
    public User getUserById(@PathVariable int id, @RequestBody User userUpdate) {
        return userService.updateUserByID(id, userUpdate);
    }

    //Update theo email
    @PutMapping("/updateUserByEmail/{email}")
    public User getUserById(@PathVariable String email, @RequestBody User userUpdate) {
        return userService.updateUserByEmail(email, userUpdate);
    }

    //Update từng field 1, giữ nguyên field khác
    @PatchMapping("/{id}")
    public User updateEachFieldById(@PathVariable int id, Map<String, Objects> fields) {
        return userService.updateEachFieldById(id, fields);
    }
}
