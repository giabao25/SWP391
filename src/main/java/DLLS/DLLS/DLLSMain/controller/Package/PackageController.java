package DLLS.DLLS.DLLSMain.controller.Package;

import DLLS.DLLS.DLLSMain.entity.Package.PackageDetail;
import DLLS.DLLS.DLLSMain.entity.Package.PackageMain;
import DLLS.DLLS.DLLSMain.entity.User;
import DLLS.DLLS.DLLSMain.service.Package.PackageDetailService;
import DLLS.DLLS.DLLSMain.service.Package.PackageMainService;
import DLLS.DLLS.DLLSMain.service.Package.PackageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;

@RestController
@RequestMapping("/packages")
public class PackageController {

    @Autowired
    private PackageService packageService;
    @Autowired
    private PackageDetailService packageDetailService;
    @Autowired
    private PackageMainService packageMainService;

    //Lấy tất cả package hiển thị ra
    @GetMapping("")
    public List<PackageMain> getAllPackage() throws SQLException {
        List<PackageMain> listPackage = packageMainService.listPackage();
        return listPackage;
    }
//
    //Lấy user có id trong path hiển thị ra
    @GetMapping("/{id}")
    public Optional<PackageMain> getUserById(@PathVariable int id) throws SQLException {
        PackageMain packageMain = packageMainService.getPackageByID(id);
        return Optional.ofNullable(packageMain);
    }
//
//    //Tìm user theo email
//    @GetMapping("/getUserByEmail/{email}")
//    public User getUserByEmail(@PathVariable String email) {
//        return userService.findUserByEmail(email);
//    }
//
//    //Thêm User vào database
//    @PostMapping("")
//    public User addUser(@RequestBody User newUser) {
//        return userService.addUser(newUser);
//    }
//
//    //Update theo ID
//    @PutMapping("/{id}")
//    public User getUserById(@PathVariable int id, @RequestBody User userUpdate) {
//        return userService.updateUserByID(id, userUpdate);
//    }
//
//    //Update theo email
//    @PutMapping("/updateUserByEmail/{email}")
//    public User getUserById(@PathVariable String email, @RequestBody User userUpdate) {
//        return userService.updateUserByEmail(email, userUpdate);
//    }
//
//    //Update từng field 1, giữ nguyên field khác
//    @PatchMapping("/{id}")
//    public User updateEachFieldById(@PathVariable int id, Map<String, Objects> fields) {
//        return userService.updateEachFieldById(id, fields);
//    }
}
