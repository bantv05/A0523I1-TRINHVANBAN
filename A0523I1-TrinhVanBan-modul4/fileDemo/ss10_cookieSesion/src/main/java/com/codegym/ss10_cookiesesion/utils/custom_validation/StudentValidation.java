package com.codegym.ss10_cookiesesion.utils.custom_validation;

import com.codegym.ss10_cookiesesion.models.Student;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

public class StudentValidation implements Validator {

    @Override
    public boolean supports(Class<?> clazz) {
        return false;
    }

    @Override
    public void validate(Object target, Errors errors) {
        Student student = (Student) target;
        if(!student.getNameStudent().matches("^[a-z ]{4,100}$")) {
            errors.rejectValue("nameStudent", "", "Ngày kết thúc không ");
        }


    }
}
