package com.codegym.test_module4.service.imp;

import com.codegym.test_module4.model.QuestionContent;
import com.codegym.test_module4.repository.IQuestionContentRepository;
import com.codegym.test_module4.service.IQuestionContentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuestionContentService implements IQuestionContentService {
    @Autowired
    IQuestionContentRepository questionContentRepository;
    @Override
    public List<QuestionContent> showListContent() {
        return questionContentRepository.findAll();
    }

    @Override
    public void create(QuestionContent content) {
        questionContentRepository.save(content);
    }

    @Override
    public void removeById(Integer id) {
        questionContentRepository.deleteById(id);
    }

    @Override
    public QuestionContent detail(Integer id) {
        return questionContentRepository.findById(id).orElse(null);
    }

    @Override
    public Page<QuestionContent> findAllAndSearch(String title, Pageable pageable) {
        return questionContentRepository.fillAllAndSearchByName("%" + title + "%", pageable);
    }


}
