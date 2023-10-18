import java.util.Scanner;

public class tinhDienTich {
    public static void main(String[] args) {
        System.out.println("Nhap chieu dai:");
        Scanner scanner = new Scanner(System.in);
        float chieuDai = scanner.nextFloat();
        System.out.println("Nhap chieu rong:");
        float chieuRong = scanner.nextFloat();
        double S = chieuRong * chieuDai;
        System.out.println("Dien tich cua hình chu nhat la "+S);
    }
}
