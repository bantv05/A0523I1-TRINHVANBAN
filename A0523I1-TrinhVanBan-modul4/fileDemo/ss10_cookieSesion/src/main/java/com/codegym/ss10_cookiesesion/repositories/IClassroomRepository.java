package com.codegym.ss10_cookiesesion.repositories;

import com.codegym.ss10_cookiesesion.models.Classroom;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IClassroomRepository extends JpaRepository<Classroom, Integer> {
}
