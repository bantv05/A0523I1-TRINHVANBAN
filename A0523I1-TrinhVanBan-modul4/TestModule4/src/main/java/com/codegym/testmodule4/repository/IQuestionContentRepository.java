package com.codegym.casestudyinote.repository;

import com.codegym.casestudyinote.model.QuestionContent;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface IQuestionContentRepository extends JpaRepository<QuestionContent, Integer> {
    @Query(value = "select * " +
            "from question_content qs where title like :title", nativeQuery = true)
    Page<QuestionContent> fillAllAndSearchByName(@Param("title")String questionContent, Pageable pageable);
}
