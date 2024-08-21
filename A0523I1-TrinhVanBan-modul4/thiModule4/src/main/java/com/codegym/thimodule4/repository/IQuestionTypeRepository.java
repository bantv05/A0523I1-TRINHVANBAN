package com.codegym.testmodule4.repository;

import com.codegym.testmodule4.model.QuestionType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IQuestionTypeRepository extends JpaRepository<QuestionType, Integer> {
}
