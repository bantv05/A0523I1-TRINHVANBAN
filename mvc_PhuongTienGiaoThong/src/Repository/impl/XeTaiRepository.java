package Repository.impl;

import Model.XeMay;
import Model.XeTai;
import Repository.IXeTaiRepository;
import until.WriteAndRead;

import java.util.ArrayList;
import java.util.List;

public class XeTaiRepository implements IXeTaiRepository {
    public final String PATH_XETAI = "E:\\Modul 1\\A0523I1-TRINHVANBAN\\A0523I1-TrinhVanBan-modul2\\BaiTap_modul2\\mvc_PhuongTienGiaoThong\\src\\data\\fileXeTai.csv";


    @Override
    public void addXeTai(XeTai xeTai) {
        List<String> stringList = new ArrayList<>();
        stringList.add(xeTai.getInfoToCSV());
        WriteAndRead.writeToCSV(PATH_XETAI, stringList, true);
    }

    @Override
    public List<XeTai> getHienThiXeTai() {
        List<XeTai> xeTaiList = new ArrayList<>();
        List<String> taiList = WriteAndRead.readCSVFile(PATH_XETAI);
        String[] arr;
        for (String string : taiList) {
            arr = string.split(",");
            XeTai xeTai = new XeTai(arr[0], arr[1], Integer.parseInt(arr[2]), arr[3], Double.parseDouble(arr[4]));
            xeTaiList.add(xeTai);
        }
        return xeTaiList;
    }
    public void deletelByBienSo(String bienSo) {
        // String string = super.deletelPhuongTienByBienSo(bienSo);
        List<XeTai> xeTaiList = getHienThiXeTai();
        for(int i = 0; i < xeTaiList.size(); i++){
            if(xeTaiList.get(i).getBienKiemSoat().contains(bienSo)){
                xeTaiList.remove(i);
                break;
            }
        }

        List<String> stringList = new ArrayList<>();
        for(XeTai st: xeTaiList){
            stringList.add(st.getInfoToCSV());
        }
        WriteAndRead.writeToCSV(PATH_XETAI, stringList, false);
    }

}
