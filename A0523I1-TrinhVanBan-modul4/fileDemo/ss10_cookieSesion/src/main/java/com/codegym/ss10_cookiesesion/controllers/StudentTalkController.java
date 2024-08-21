package com.codegym.ss10_cookiesesion.controllers;

import com.codegym.ss10_cookiesesion.models.Student;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.SessionAttribute;

import java.util.List;

@Controller
public class StudentTalkController {

    @GetMapping("/talk")
    public String viewTalkList(@SessionAttribute("studentTalkList") List<Student> studentTalkList,
                               Model model) {
        model.addAttribute("studentTalkList", studentTalkList);
        return "talk";
    }
}
