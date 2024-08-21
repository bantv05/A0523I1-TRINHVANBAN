package com.codegym.casestudyinote.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

@Entity
@Table(name = "question_content")
@Where(clause = "flag = false")
@SQLDelete(sql="update question_content set flag = true where id = ?")
public class QuestionContent {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_content")
    private Integer id;
    @NotBlank(message = "Không được để trống 🔥")
    @Pattern(regexp = "^[a-zA-Z1-9]*", message = "Không cho sử dụng kí tự đặc biệt")
    @Size(min = 5, max = 100, message = "Không đúng yêu cầu")
    private String title;
    @NotBlank(message = "Không được để trống 🔥")
    private String content;
    @NotBlank(message = "Không được để trống 🔥")
    private String answer;
    @Column(name = "date_create")
    private String dateCreat;
    private String status = "Chưa phản hồi";
    @ManyToOne
    @JoinColumn(name = "id_questionType", referencedColumnName = "id_questionType")
    private QuestionType questionType;
    private boolean flag = false;

    public QuestionContent() {
    }

    public QuestionContent(Integer id, String title, String content, String answer, String dateCreat, String status, QuestionType questionType, boolean flag) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.answer = answer;
        this.dateCreat = dateCreat;
        this.status = status;
        this.questionType = questionType;
        this.flag = flag;
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

    public boolean isFlag() {
        return flag;
    }

    public void setFlag(boolean flag) {
        this.flag = flag;
    }
}
