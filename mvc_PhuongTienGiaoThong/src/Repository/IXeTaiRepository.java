package Repository;

import Model.XeTai;

import java.util.List;

public interface IXeTaiRepository {
    void addXeTai(XeTai xeTai);
    List<XeTai> getHienThiXeTai();
    void deletelByBienSo(String s);
}
