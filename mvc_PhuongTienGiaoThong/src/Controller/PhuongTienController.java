package Controller;

import Sevice.impl.CarSevice;
import Sevice.impl.XeMaySevice;
import Sevice.impl.XeTaiSevice;

import java.util.Scanner;

public class PhuongTienController {
    CarSevice carSevice = new CarSevice();
    XeMaySevice xeMaySevice = new XeMaySevice();
    XeTaiSevice xeTaiSevice = new XeTaiSevice();

    public void disPlay() {
        Scanner scanner = new Scanner(System.in);
        boolean flag = true;
        QUAY_LAI:
        while (flag) {
            System.out.println("CHUONG TRINH QUAN LY THU VIEN GIAO THONG");
            System.out.println("Chọn chức năng:"
                    + "\n1. Them phuong tien"
                    + "\n2. Hien thi phuong tien"
                    + "\n3. Xoa phuong tien"
                    + "\n4. Thoat"
            );

            int phuongTien = 0;
            //boolean flag = true;
            String string = scanner.nextLine();
            try {
                phuongTien = Integer.parseInt(string);
            } catch (NumberFormatException e) {
                System.out.println("Lỗi: Không thể chuyển đổi chuỗi thành số nguyên.");
                flag = true;
                continue QUAY_LAI;
            }
            switch (phuongTien) {
                case 1:
                    QUAY_LAI_CASE1:
                    while (flag) {
                        System.out.println("Yeu cau: "
                                + "\n1. Them xe tai"
                                + "\n2. Them Oto"
                                + "\n3. Them xe may"
                                + "\n4. Thoat");
                        int them = -1;
                        try {
                            String st1 = scanner.nextLine();
                            them = Integer.parseInt(st1);
                        } catch (NumberFormatException e) {
                            System.out.println("Thuc hien lai");
                            continue QUAY_LAI_CASE1;
                        }
                        switch (them) {
                            case 1:
                                System.out.println("Them xe tai");
                                xeTaiSevice.addXeTai();
                                flag = true;
                                break;
                            case 2:
                                System.out.println("Them xe oto");
                                carSevice.addXeCar();
                                flag = true;
                                break;
                            case 3:
                                System.out.println("Them xe may");
                                xeMaySevice.addXeMay();
                                flag = true;
                                break;
                            default:
                                flag = false;
                        }
                    }
                    break;
                case 2:
                    QUAY_LAI_CASE2:
                    while (flag) {
                        System.out.println("Yeu cau: "
                                + "\n1. Hien thi xe tai"
                                + "\n2. Hien thi Oto"
                                + "\n3. Hien thi xe may"
                                + "\n4. Thoat"
                        );
                        int hienThi = -1;
                        try {
                            String st3 = scanner.nextLine();
                            hienThi = Integer.parseInt(st3);
                        } catch (NumberFormatException e) {
                            System.out.println("Thuc hien lai");
                            continue QUAY_LAI_CASE2;
                        }
                        switch (hienThi) {
                            case 1:
                                System.out.println("Hien thi xe tai");
                                xeTaiSevice.hienThiXeTai();
                                flag = true;
                                break;
                            case 2:
                                System.out.println("Hien thi Oto");
                                carSevice.hienThiXeCar();
                                flag = true;
                                break;
                            case 3:
                                System.out.println("Hien thi xe may");
                                xeMaySevice.hienThiXeMay();
                                flag = true;
                                break;
                            default:
                                flag = false;
                        }
                        break;
                    }
                    break;
                case 3:
                    QUAY_LAI_CASE3:
                    while (flag) {
                        System.out.println("Yeu cau: "
                                + "\n1. Xoa xe tai"
                                + "\n2. Xoa Oto"
                                + "\n3. Xoa xe may"
                                + "\n4. Thoat"
                        );
                        int delete = -1;
                        try {
                            String st3 = scanner.nextLine();
                            delete = Integer.parseInt(st3);
                        } catch (NumberFormatException e) {
                            System.out.println("Thuc hien lai");
                            continue QUAY_LAI_CASE3;
                        }
                        switch (delete) {
                            case 1:
                                System.out.println("Nhap bien so can xoa:");
                                xeTaiSevice.xoaPhuongTien();
                                flag = true;
                                break;
                            case 2:
                                System.out.println("Nhap bien so can xoa:");
                                carSevice.xoaPhuongTien();
                                flag = true;
                                break;
                            case 3:
                                System.out.println("Nhap bien so can xoa:");
                                xeMaySevice.xoaPhuongTien();
                                flag = true;
                                break;
                            case 4:
                            default:
                                flag = false;
                        }
                    }
                    break;
                default:
                    flag = true;
            }
        }
    }
}
