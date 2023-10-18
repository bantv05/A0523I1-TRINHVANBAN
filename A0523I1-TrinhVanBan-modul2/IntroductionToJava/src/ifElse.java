import java.util.Scanner;

public class ifElse {
    public static void main(String[] args) {
        System.out.println("Phuong trinh bac nhat co dang 'ax + b = c' nhap de kiem tra");
        Scanner input = new Scanner(System.in);
        System.out.printf("a:");
        int a = input.nextInt();

        System.out.printf("b:");
        int b = input.nextInt();

        System.out.printf("c:");
        int c = input.nextInt();
        if(a!=0){
            float f = (b - c) / a;
            System.out.println("Phuong trinh co nghiem duy nhat "+f);
        }else{
            System.out.println("Phuong trinh vo nghiem");
        }
    }
}
