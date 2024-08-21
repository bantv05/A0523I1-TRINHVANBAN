package ss1_spring.repository.impl;

import com.codegym.ss1_spring.model.Student;
import com.codegym.ss1_spring.repository.IStudentRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class StudentRepository implements IStudentRepository {
    private static List<Student> students = new ArrayList<>();
    static {
        students.add(new Student(1, "Trinh Van Ban", 20, "DHKT Da Nang", "22CT3"));
        students.add(new Student(2, "Nguyen Van A", 22, "DH Kinh Te DN", "20TT3"));
        students.add(new Student(3, "Le Van D", 24, "DHKT Da Nang", "18DD4"));
        students.add(new Student(4, "Dao Phong Anh", 20, "DH Duy Tan", "22AB3"));
        students.add(new Student(5, "Tuan Tran", 21, "DH Dong A", "22DA3"));
    }
    @Override
    public List<Student> hienThiStudent() {
        return students;
    }
}
