package Model;

public class XeMay extends PhuongTien{
    private String congSuat;

    public XeMay(String bienKiemSoat, String tenHangSanXuat, int namSanXuat, String chuSoHuu, String congSuat) {
        super(bienKiemSoat, tenHangSanXuat, namSanXuat, chuSoHuu);
        this.congSuat = congSuat;
    }

    public String getCongSuat() {
        return congSuat;
    }

    public void setCongSuat(String congSuat) {
        this.congSuat = congSuat;
    }

    @Override
    public String toString() {
        return "xeMay"+super.toString() +
                "congSuat='" + congSuat + '\'' +
                '}';
    }
    public String getInfoToCSV(){
        return super.getInfoToCSV()+","
                +getCongSuat();
    }
}
