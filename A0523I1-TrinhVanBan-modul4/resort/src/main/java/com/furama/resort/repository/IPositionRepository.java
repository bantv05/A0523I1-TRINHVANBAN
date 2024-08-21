package com.furama.resort.repository;
import com.furama.resort.model.Position;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IPosition extends JpaRepository<Position, Long> {
}
