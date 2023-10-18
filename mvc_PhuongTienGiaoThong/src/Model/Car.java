package Model;

public class Car extends PhuongTien{
    private int soChoNgoi;
    private String kieuXe;

    public Car(String bienKiemSoat, String tenHangSanXuat, int namSanXuat, String chuSoHuu, int soChoNgoi, String kieuXe) {
        super(bienKiemSoat, tenHangSanXuat, namSanXuat, chuSoHuu);
        this.soChoNgoi = soChoNgoi;
        this.kieuXe = kieuXe;
    }


    public int getSoChoNgoi() {
        return soChoNgoi;
    }

    public void setSoChoNgoi(int soChoNgoi) {
        this.soChoNgoi = soChoNgoi;
    }

    public String getKieuXe() {
        return kieuXe;
    }

    public void setKieuXe(String kieuXe) {
        this.kieuXe = kieuXe;
    }

    @Override
    public String toString() {
        return "Car"+super.toString()
                +"soChoNgoi=" + soChoNgoi +
                ", kieuXe='" + kieuXe + '\'' +
                '}';
    }
    public String getInfoToCSV(){
        return getBienKiemSoat() +","
                +getTenHangSanXuat()+","
                +getNamSanXuat()+","
                +getChuSoHuu()+","
                +getSoChoNgoi()+","
                +getKieuXe();
    }

}
