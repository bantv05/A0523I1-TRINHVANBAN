package Repository.impl;

import Model.Car;
import Repository.ICarRepository;
import until.WriteAndRead;

import java.util.ArrayList;
import java.util.List;

public class CarRepository implements ICarRepository {
    public final String PATH_XECAR = "E:\\Modul 1\\A0523I1-TRINHVANBAN\\A0523I1-TrinhVanBan-modul2\\BaiTap_modul2\\mvc_PhuongTienGiaoThong\\src\\data\\fileXeCar.csv";

    @Override
    public void addCar(Car car) {
        List<String> stringList = new ArrayList<>();
        stringList.add(car.getInfoToCSV());
        WriteAndRead.writeToCSV(PATH_XECAR, stringList, true);
    }

    @Override
    public List<Car> getHienThiCar() {
        List<Car> carList = new ArrayList<>();
        List<String> stringList = WriteAndRead.readCSVFile(PATH_XECAR);
        String[] array;
        for (String string : stringList) {
            array = string.split(",");
            Car car = new Car(array[0], array[1], Integer.parseInt(array[2]), array[3], Integer.parseInt(array[4]), array[5]);
            carList.add(car);
        }
        return carList;
    }

    @Override
    public void deletelByBienSo(String bienSo) {
        // String string = super.deletelPhuongTienByBienSo(bienSo);
        List<Car> carList = getHienThiCar();
        for (int i = 0; i < carList.size(); i++) {
            if (carList.get(i).getBienKiemSoat().equals(bienSo)) {
                carList.remove(i);
                break;
            }
        }

        List<String> stringList = new ArrayList<>();
        for (Car st : carList) {
            stringList.add(st.getInfoToCSV());
        }
        WriteAndRead.writeToCSV(PATH_XECAR, stringList, false);
    }
}
