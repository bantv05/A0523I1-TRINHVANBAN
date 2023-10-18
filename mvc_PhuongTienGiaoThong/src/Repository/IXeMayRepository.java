package Repository;

import Model.XeMay;

import java.util.List;

public interface IXeMayRepository {
    void addXeMay(XeMay xeMay);
    List<XeMay> getHienThiXeMay();
    void deletelByBienSo(String s);
}
