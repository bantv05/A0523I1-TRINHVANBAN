package com.furama.resort.repository;
import com.furama.resort.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IEmployee extends JpaRepository<Employee, Long> {
}
