package Sevice.impl;

import Model.PhuongTien;
import Model.XeMay;
import Model.XeTai;
import Repository.impl.XeTaiRepository;
import Sevice.IXeTai;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class XeTaiSevice implements IXeTai {
    XeTaiRepository xeTaiRepository = new XeTaiRepository();
    Scanner scanner = new Scanner(System.in);
    @Override
    public void addXeTai() {
        System.out.println("Nhap bien kiem soat xe: ");
        String bienSo = scanner.nextLine();
        System.out.println("Nhap hang san xuat: ");
        String hangSX = scanner.nextLine();
        System.out.println("Nhap nam san xuat: ");
        String string = scanner.nextLine();
        Integer namSX = Integer.parseInt(string);
        System.out.println("Nhap chu so huu: ");
        String chuSH = scanner.nextLine();
        System.out.println("Nhap trong tai: ");
        String tT = scanner.nextLine();
        Double trongTai = Double.parseDouble(tT);
        XeTai xeTai = new XeTai(bienSo, hangSX, namSX, chuSH, trongTai);
        xeTaiRepository.addXeTai(xeTai);
        //XeTai(String bienKiemSoat, String tenHangSanXuat, int namSanXuat, String chuSoHuu, int trongTai)
    }

    @Override
    public void hienThiXeTai() {
        List<XeTai> xeTais = xeTaiRepository.getHienThiXeTai();
        for(int i = 0; i < xeTais.size(); i++){
            if(xeTais.get(i) != null){
                System.out.println(i+1+" ."+ xeTais.get(i));
            }
        }
    }
    public void xoaPhuongTien() {
        System.out.println("Nhap bien kiem soat can xoa: ");
        Scanner scanner = new Scanner(System.in);
        String remove = scanner.nextLine();
        xeTaiRepository.deletelByBienSo(remove);
    }
}
