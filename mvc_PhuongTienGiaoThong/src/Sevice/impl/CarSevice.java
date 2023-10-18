package Sevice.impl;

import Model.Car;
import Repository.impl.CarRepository;
import Sevice.ICar;

import java.util.List;
import java.util.Scanner;

public class CarSevice implements ICar {
    CarRepository car = new CarRepository();
    Scanner scanner = new Scanner(System.in);

    public CarSevice() {
    }

    //Biển kiểm soát,hãng sản xuất,năm sản xuất,chủ sở hữu,kiểu xe,số chỗi ngồi.
    @Override
    public void addXeCar() {
        System.out.println("Nhap bien kiem soat xe: ");
        String bienSo = scanner.nextLine();
        System.out.println("Nhap hang san xuat: ");
        String hangSX = scanner.nextLine();
        System.out.println("Nhap nam san xuat: ");
        String sx = scanner.nextLine();
        Integer namSX = Integer.parseInt(sx);
        System.out.println("Nhap chu so huu: ");
        String chuSH = scanner.nextLine();
        System.out.println("Nhap so cho ngoi: ");
        String choNgoi = scanner.nextLine();
        Integer soChoNgoi = Integer.parseInt(choNgoi);
        System.out.println("Nhap kieu xe: ");
        String kieuXe = scanner.nextLine();
        scanner.nextLine();
        //Car(String bienKiemSoat, String tenHangSanXuat, int namSanXuat, String chuSoHuu, int soChoNgoi, String kieuXe)
        Car carSevice = new Car(bienSo, hangSX, namSX, chuSH, soChoNgoi, kieuXe);
        car.addCar(carSevice);
    }

    @Override
    public void hienThiXeCar() {
        List<Car> xeCar = car.getHienThiCar();
        for(int i = 0; i < xeCar.size(); i++){
            if(xeCar.get(i) != null){
                System.out.println(i+1+" ."+ xeCar.get(i));
            }
        }
    }
    public void xoaPhuongTien() {
        System.out.println("Nhap bien kiem soat can xoa: ");
        Scanner scanner = new Scanner(System.in);
        String remove = scanner.nextLine();
        car.deletelByBienSo(remove);
    }
}
