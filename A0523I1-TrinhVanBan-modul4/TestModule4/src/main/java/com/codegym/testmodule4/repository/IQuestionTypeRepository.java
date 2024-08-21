package com.codegym.casestudyinote.repository;

import com.codegym.casestudyinote.model.QuestionType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IQuestionTypeRepository extends JpaRepository<QuestionType, Integer> {
}
