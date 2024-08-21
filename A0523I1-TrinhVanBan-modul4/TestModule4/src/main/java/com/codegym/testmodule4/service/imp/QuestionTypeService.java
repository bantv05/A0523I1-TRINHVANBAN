package com.codegym.casestudyinote.service.imp;
import com.codegym.casestudyinote.model.QuestionType;
import com.codegym.casestudyinote.repository.IQuestionTypeRepository;
import com.codegym.casestudyinote.service.IQuestionTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuestionTypeService implements IQuestionTypeService {
    @Autowired
    private IQuestionTypeRepository questionTypeRepository;
    @Override
    public List<QuestionType> showList() {
        return questionTypeRepository.findAll();
    }
}
