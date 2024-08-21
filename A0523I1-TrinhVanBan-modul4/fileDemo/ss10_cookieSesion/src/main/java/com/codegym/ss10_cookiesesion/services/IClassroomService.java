package com.codegym.ss10_cookiesesion.services;

import com.codegym.ss10_cookiesesion.models.Classroom;

import java.util.List;

public interface IClassroomService {
    List<Classroom> findAll();
}
