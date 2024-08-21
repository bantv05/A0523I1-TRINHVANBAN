package com.codegym.testmodule4.service.imp;
import com.codegym.testmodule4.model.QuestionType;
import com.codegym.testmodule4.repository.IQuestionTypeRepository;
import com.codegym.testmodule4.service.IQuestionTypeService;
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
