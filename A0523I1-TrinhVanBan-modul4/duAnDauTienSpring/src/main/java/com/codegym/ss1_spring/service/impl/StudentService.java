package com.codegym.ss1_spring.service.impl;

import com.codegym.ss1_spring.model.Student;
import com.codegym.ss1_spring.repository.impl.StudentRepository;
import com.codegym.ss1_spring.service.IStudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class StudentService implements IStudentService {
    @Autowired
    private StudentRepository studentRepository;
    @Override
    public List<Student> hienThiDanhSach() {
        return studentRepository.hienThiStudent();
    }
}
