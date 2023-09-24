package com.example.dung.controller;

import com.example.dung.model.User;
import com.example.dung.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;


@Controller
public class loginController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/")
    public String login() {
        return "login";
    }

    @PostMapping("/login")
    public String userLogin(@ModelAttribute User user, Model model) {
        System.out.println(user.toString());
//        model.addAttribute("username", user.getUsername());
//        model.addAttribute("password", user.getPassword());
//        model.addAttribute("roleID", user.getRoleID());

        User user_inserted = userRepository.save(user);
        model.addAttribute("message", user_inserted.getUsername() + " inserted.");

        if (user.getRoleID().equals("MT")) {
            return "mentorpage";
        } else if (user.getRoleID().equals("SF")) {
            return "staffpage";
        } else if (user.getRoleID().equals("ST")) {
            return "welcome";
        }
        return "loginerror";
    }
}
