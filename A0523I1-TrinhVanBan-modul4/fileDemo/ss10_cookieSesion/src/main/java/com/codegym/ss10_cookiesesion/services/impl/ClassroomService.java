package com.codegym.ss10_cookiesesion.services.impl;

import com.codegym.ss10_cookiesesion.models.Classroom;
import com.codegym.ss10_cookiesesion.repositories.IClassroomRepository;
import com.codegym.ss10_cookiesesion.services.IClassroomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClassroomService implements IClassroomService {

    @Autowired
    private IClassroomRepository classroomRepository;

    @Override
    public List<Classroom> findAll() {
        return classroomRepository.findAll();
    }
}
