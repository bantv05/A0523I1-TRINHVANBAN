package Model;

public class XeTai extends PhuongTien{
    private double trongTai;

    public XeTai(int trongTai) {
        this.trongTai = trongTai;
    }

    public XeTai(String bienKiemSoat, String tenHangSanXuat, int namSanXuat, String chuSoHuu, double trongTai) {
        super(bienKiemSoat, tenHangSanXuat, namSanXuat, chuSoHuu);
        this.trongTai = trongTai;
    }

    public double getTrongTai() {
        return trongTai;
    }

    public void setTrongTai(double trongTai) {
        this.trongTai = trongTai;
    }

    @Override
    public String toString() {
        return "XeTai{" +super.toString()+
                "trongTai=" + trongTai +
                '}';
    }
    public String getInfoToCSV(){
        return getBienKiemSoat() +","
                +getTenHangSanXuat()+","
                +getNamSanXuat()+","
                +getChuSoHuu()+","
                +getTrongTai();
    }
}
