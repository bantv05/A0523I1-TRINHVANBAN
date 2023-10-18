package Repository.impl;

import Model.Car;
import Model.XeMay;
import Repository.IXeMayRepository;
import until.WriteAndRead;

import java.util.ArrayList;
import java.util.List;

public class XeMayRepository implements IXeMayRepository {
    public final String PATH_XEMAY = "E:\\Modul 1\\A0523I1-TRINHVANBAN\\A0523I1-TrinhVanBan-modul2\\BaiTap_modul2\\mvc_PhuongTienGiaoThong\\src\\data\\fileXeMay.csv";
    @Override
    public void addXeMay(XeMay xeMay) {
        List<String> stringList = new ArrayList<>();
        stringList.add(xeMay.getInfoToCSV());
        WriteAndRead.writeToCSV(PATH_XEMAY, stringList,true);
    }

    @Override
    public List<XeMay> getHienThiXeMay() {
        List<XeMay> xeMayList = new ArrayList<>();
        List<String> stringList = WriteAndRead.readCSVFile(PATH_XEMAY);
        String array[] = null;
        for(String string : stringList){
            array = string.split(" ,");
            XeMay xeMay = new XeMay(array[0], array[1],Integer.parseInt(array[2]),  array[3], array[4]);
            xeMayList.add(xeMay);
        }
        return xeMayList;
    }
    public void deletelByBienSo(String bienSo) {
        // String string = super.deletelPhuongTienByBienSo(bienSo);
        List<XeMay> xeMayList = getHienThiXeMay();
        for(int i = 0; i < xeMayList.size(); i++){
            if(xeMayList.get(i).getBienKiemSoat().contains(bienSo)){
                xeMayList.remove(i);
                break;
            }
        }

        List<String> stringList = new ArrayList<>();
        for(XeMay st: xeMayList){
            stringList.add(st.getInfoToCSV());
        }
        WriteAndRead.writeToCSV(PATH_XEMAY, stringList, false);
    }
}
