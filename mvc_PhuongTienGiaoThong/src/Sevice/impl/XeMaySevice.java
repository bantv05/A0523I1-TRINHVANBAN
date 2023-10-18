package Sevice.impl;

import Model.PhuongTien;
import Model.XeMay;
import Repository.impl.XeMayRepository;
import Sevice.IXeMay;

import java.util.List;
import java.util.Scanner;

public class XeMaySevice implements IXeMay {
    XeMayRepository xeMayRepository = new XeMayRepository();
    Scanner scanner = new Scanner(System.in);
    @Override
    public void addXeMay() {
        System.out.println("Nhap bien kiem soat xe: ");
        String bienSo = scanner.nextLine();
        System.out.println("Nhap hang san xuat: ");
        String hangSX = scanner.nextLine();
        System.out.println("Nhap nam san xuat: ");
        String string = scanner.nextLine();
        Integer namSX = Integer.parseInt(string);
        System.out.println("Nhap chu so huu: ");
        String chuSH = scanner.nextLine();
        System.out.println("Nhap cong suat: ");
        String congSuat = scanner.nextLine();
        XeMay xeMay = new XeMay(bienSo, hangSX, namSX, chuSH, congSuat);
        xeMayRepository.addXeMay(xeMay);
        //XeMay(String bienKiemSoat, String tenHangSanXuat, int namSanXuat, String chuSoHuu, String congSuat)
    }

    @Override
    public void hienThiXeMay() {
        List<XeMay> xeMay = xeMayRepository.getHienThiXeMay();
        for(int i = 0; i < xeMay.size(); i++){
            if(xeMay.get(i) != null){
                System.out.println(i+1+" ."+ xeMay.get(i));
            }
        }
    }
    public void xoaPhuongTien() {
        System.out.println("Nhap bien kiem soat can xoa: ");
        Scanner scanner = new Scanner(System.in);
        String remove = scanner.nextLine();
        xeMayRepository.deletelByBienSo(remove);
    }
}
