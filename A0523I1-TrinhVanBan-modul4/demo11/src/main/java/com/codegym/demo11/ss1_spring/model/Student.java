package ss1_spring.model;

public class Student {
    private int id;
    private String hoTen;
    private int tuoi;
    private String truongHoc;
    private String lop;

    public Student(int id, String hoTen, int tuoi, String truongHoc, String lop) {
        this.id = id;
        this.hoTen = hoTen;
        this.tuoi = tuoi;
        this.truongHoc = truongHoc;
        this.lop = lop;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getHoTen() {
        return hoTen;
    }

    public void setHoTen(String hoTen) {
        this.hoTen = hoTen;
    }

    public int getTuoi() {
        return tuoi;
    }

    public void setTuoi(int tuoi) {
        this.tuoi = tuoi;
    }

    public String getTruongHoc() {
        return truongHoc;
    }

    public void setTruongHoc(String truongHoc) {
        this.truongHoc = truongHoc;
    }

    public String getLop() {
        return lop;
    }

    public void setLop(String lop) {
        this.lop = lop;
    }
}
