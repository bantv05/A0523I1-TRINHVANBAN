package com.codegym.ss10_cookiesesion.controllers;

import com.codegym.ss10_cookiesesion.models.Student;
import com.codegym.ss10_cookiesesion.services.IClassroomService;
import com.codegym.ss10_cookiesesion.services.IStudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("/students")
@SessionAttributes("studentTalkList")
public class StudentController {
    //    DI
//    Có 3 cách: Field, constructor, setter
    @Autowired
    private IStudentService studentService;

    @ModelAttribute("studentTalkList")
    public List<Student> initSession() {
        return new ArrayList<>();
    }

    @Autowired
    private IClassroomService classroomService;

    @GetMapping("")
    public String showList(Model model, @RequestParam(value = "nameSearch", defaultValue = "") String name,
                           @RequestParam(value = "page", defaultValue = "0") int page) {
        if (page < 0) {
            page = 0;
        }
//        Sort sort = Sort.by(Sort.Direction.DESC,"point");
        Page<Student> studentList = studentService.findAllByName(name, PageRequest.of(page, 2));
        if (studentList.isEmpty()) {

        }
        model.addAttribute("listStudent", studentList);
        model.addAttribute("nameSearch", name);
        return "list";
    }

    @PostMapping("/delete")
    public String delete(@RequestParam("codeStudentDelete") Integer code) {
        studentService.deleteById(code);
        return "redirect:/students";
    }

    @GetMapping("/create")
    public String showPageCreate(Model model) {
        Student student = new Student();

        model.addAttribute("student", student);
        model.addAttribute("classrooms", classroomService.findAll());
        return "create";
    }

    @PostMapping("/create")
    public String addStudent(@Validated @ModelAttribute("student") Student student, BindingResult bindingResult,
                             RedirectAttributes redirect, Model model) {
//        new StudentValidation().validate(student, bindingResult);
        if (bindingResult.hasErrors()) {
            model.addAttribute("classrooms", classroomService.findAll());
            return "create";
        }
        studentService.save(student);
        redirect.addFlashAttribute("message", "Thêm mới thành công");
//       Redirect chuyển về trang list
        return "redirect:/students";
    }

    @GetMapping("/{code}/update")
    public String showPageUpdate(Model model, @PathVariable(name = "code") Integer code) {

        return "update";
    }

    @GetMapping("/{code}/add-talk")
    public String addTalk(Model model, @PathVariable(name = "code") Integer code,
                          @ModelAttribute("studentTalkList")List<Student> studentTalkList) {
        Student student = studentService.findById(code);
        studentTalkList.add(student);
        return "redirect:/students";
    }

    @ExceptionHandler(Exception.class)
    public String handleException() {
        return "Error";
    }


}
