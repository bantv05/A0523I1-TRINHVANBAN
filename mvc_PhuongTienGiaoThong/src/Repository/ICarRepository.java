package Repository;

import Model.Car;

import java.util.List;

public interface ICarRepository {
    void addCar(Car car);
    List<Car> getHienThiCar();

    void deletelByBienSo(String bienSo);
}
