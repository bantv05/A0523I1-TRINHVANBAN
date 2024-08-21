package com.codegym.ss10_cookiesesion.models;

import com.codegym.ss10_cookiesesion.utils.annotation.NameConstraint;
import jakarta.persistence.*;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;


@Entity(name = "students")
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "code", columnDefinition = "INT")
    private Integer code;
    @Column(name = "name_student", columnDefinition = "VARCHAR(100)")
    @NameConstraint
//    @NotBlank(message = "Tên khng được để trống")
//    @Pattern(regexp = "^[^a-z ]{4,100}$", message = "Tên không đúng định dạng. Ex: truong tan hai")
    private String nameStudent;
    @Min(value = 0, message = "Điểm không được nhỏ hơn 0")
    @Max(value = 10, message = "Điểm khng được lớn hơn 10.")
    private Double point;
    @Column(name = "id_card")
    private String idCard;
    @ManyToOne
    @JoinColumn(name = "code_class")
    private Classroom classroom;

    public Student() {
    }

    public Student(int code, String nameStudent, Double point, String idCard, Classroom classroom) {
        this.code = code;
        this.nameStudent = nameStudent;
        this.point = point;
        this.idCard = idCard;
        this.classroom = classroom;
    }

    public Integer getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public String getNameStudent() {
        return nameStudent;
    }

    public void setNameStudent(String nameStudent) {
        this.nameStudent = nameStudent;
    }

    public Double getPoint() {
        return point;
    }

    public void setPoint(Double point) {
        this.point = point;
    }

    public String getIdCard() {
        return idCard;
    }

    public void setIdCard(String idCard) {
        this.idCard = idCard;
    }

    public Classroom getClassroom() {
        return classroom;
    }

    public void setClassroom(Classroom classroom) {
        this.classroom = classroom;
    }
}
