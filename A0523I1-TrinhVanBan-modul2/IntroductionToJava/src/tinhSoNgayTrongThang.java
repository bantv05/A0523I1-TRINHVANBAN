import java.util.Scanner;

public class tinhSoNgayTrongThang {
    public static void main(String[] args) {
        System.out.println("Nhap thang de biet so ngay trong thang:");
        Scanner scanner = new Scanner(System.in);
        int a = scanner.nextInt();
        switch (a){
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                System.out.println("So ngay trong thang nay la 31 ngay");
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                System.out.println("So ngay trong thang nay la 30 ngay");
                break;
            case 2:
                System.out.println("Số ngày trong tháng này là 28 or 29 ngày");
            default:
                System.out.println("ban nhap thang khong dung");

        }
    }
}
