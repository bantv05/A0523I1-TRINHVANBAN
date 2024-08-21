package com.codegym.ss10_cookiesesion.repositories;

import com.codegym.ss10_cookiesesion.models.Student;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IStudentRepository extends JpaRepository<Student, Integer> {
    @Query(value = "select students.*, classrooms.name_class from students join classrooms on students.code_class = classrooms.code_class  where name_student like :name ", nativeQuery = true)
    List<Student> searchByName(@Param("name")String name);

    @Query(value = "select students.*, classrooms.name_class from students join classrooms on students.code_class = classrooms.code_class  where name_student like :name", nativeQuery = true)
    Page<Student> searchByName(@Param("name")String name, Pageable pageable);

    List<Student> findAllByPointBetween(Double prev, Double next);
}
