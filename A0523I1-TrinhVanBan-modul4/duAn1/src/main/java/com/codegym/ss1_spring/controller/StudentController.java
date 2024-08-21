package com.codegym.duan1.controller;

import com.codegym.ss1_spring.model.Student;
import com.codegym.ss1_spring.service.IStudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/students")
public class StudentController {
    //    DI
//    Có 3 cách: Field, constructor, setter
    @Autowired
    private IStudentService studentService;

    @GetMapping("")
    public String showList(Model model) {
        List<Student> studentList = studentService.hienThiDanhSach();
        model.addAttribute("listStudent", studentList);
        return "list";
    }
}
