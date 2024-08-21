package com.codegym.testmodule4.utils.ValidateC2;

import com.codegym.testmodule4.model.QuestionContent;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

public class QuestionContentValid implements Validator {

    @Override
    public boolean supports(Class<?> clazz) {
        return false;
    }

    @Override
    public void validate(Object target, Errors errors) {
        QuestionContent questionContent = (QuestionContent) target;
        if(!questionContent.getContent().matches("^[\\p{L}0-9\\s]*$")){
//            field: content là trường mà bị lỗi
//            errorCode : file chuyên lỗi về valid ->>msg ở resources
            errors.rejectValue("content", "content.invalidFormat" );
        }
        if(!questionContent.getAnswer().matches("^[\\p{L}0-9\\s]{5,}$")){
            errors.rejectValue("answer", "answer.invalidFormat");
        }
    }

    @Override
    public Errors validateObject(Object target) {
        return Validator.super.validateObject(target);
    }
}
