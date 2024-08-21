package com.furama.resort.repository;

import com.furama.resort.model.EducationDegree;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IEducationDegree extends JpaRepository<EducationDegree, Long> {
}
