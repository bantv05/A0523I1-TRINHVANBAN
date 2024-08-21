package com.codegym.casestudyinote.controller;

import com.codegym.casestudyinote.model.QuestionContent;
import com.codegym.casestudyinote.service.IQuestionContentService;
import com.codegym.casestudyinote.service.IQuestionTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("")
public class QuestionContentController {
    @Autowired
    private IQuestionContentService questionContentService;
    @Autowired
    private IQuestionTypeService questionTypeService;
    @GetMapping("")
    public String showListQuestionContent(Model model){
        List<QuestionContent> questionContents = questionContentService.showListContent();
        model.addAttribute("questionContents", questionContents);
        return "list";
    }
}
