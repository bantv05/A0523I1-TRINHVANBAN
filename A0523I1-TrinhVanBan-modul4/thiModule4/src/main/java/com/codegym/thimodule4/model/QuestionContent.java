package com.codegym.testmodule4.model;

import com.codegym.testmodule4.utils.validateC1.IContentValidate;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;
import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name = "question_content")
public class QuestionContent {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_content")
    private Integer id;
    @NotBlank(message = "Không được để trống ❗")
    @Pattern(regexp = "^[\\p{L}0-9\\s\\p{Punct}]*$", message = "❗❗")
    @Size(min = 2, max = 100, message = "Không đúng yêu cầu")
    private String title;
    @NotBlank(message = "Không được để trống ❗")
//    @Pattern(regexp = "^[\\p{L}0-9\\s]*$", message = "Chỉ được sử dụng chữ cái, số và khoảng trắng")
    @IContentValidate
    private String content;
    @NotBlank(message = "Không được để trống ❗")
//    @Pattern(regexp = "^[\\p{L}0-9\\s]*$", message = "Chỉ được sử dụng chữ cái, số và khoảng trắng")
    @IContentValidate
    private String answer;
    @NotBlank(message = "Không được để trống ❗")
    @Column(name = "date_create", columnDefinition = "date")
    private String dateCreat;
    private String status = "Chưa phản hồi";
    @ManyToOne
    @JoinColumn(name = "id_questionType", referencedColumnName = "id_questionType")
    private QuestionType questionType;

    public QuestionContent() {
    }

    public QuestionContent(Integer id, String title, String content, String answer, String dateCreat, String status, QuestionType questionType) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.answer = answer;
        this.dateCreat = dateCreat;
        this.status = status;
        this.questionType = questionType;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }

    public String getDateCreat() {
        return dateCreat;
    }
    public void setDateCreat(String dateCreat) {
        this.dateCreat = dateCreat;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public QuestionType getQuestionType() {
        return questionType;
    }

    public void setQuestionType(QuestionType questionType) {
        this.questionType = questionType;
    }

}
