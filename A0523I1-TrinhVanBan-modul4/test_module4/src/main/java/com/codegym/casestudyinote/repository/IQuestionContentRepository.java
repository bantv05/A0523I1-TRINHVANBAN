package com.codegym.test_module4.repository;

import com.codegym.test_module4.model.QuestionContent;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IQuestionContentRepository extends JpaRepository<QuestionContent, Integer> {
    @Query(value = "select * " +
            "from question_content qs where title like :title", nativeQuery = true)
    Page<QuestionContent> fillAllAndSearchByName(@Param("title")String questionContent, Pageable pageable);
}
