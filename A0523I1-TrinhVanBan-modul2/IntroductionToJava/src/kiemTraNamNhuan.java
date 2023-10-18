import java.util.Scanner;

public class kiemTraNamNhuan {
    public static void main(String[] args) {
        System.out.println("Nhap nam de kiem tra nam nhuan");
        Scanner scanner = new Scanner(System.in);
        int nam = scanner.nextInt();

        if((nam % 4 == 0 && nam % 100 !=0) || (nam % 100 == 0 && nam % 400 == 0)){
            System.out.println("Nam "+nam+" la nam nhuan");
        }else{
            System.out.println("Nam "+nam+" khong phai la nam nhuan");
        }
    }
}
