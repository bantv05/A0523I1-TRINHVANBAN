import java.util.Date;
import java.util.Scanner;

public class SystemTime {
    public static void main(String[] args) {
        Date now = new Date();
        System.out.printf("Now is: " + now);
        System.out.print("Enter your grade: ");
        Scanner input = new Scanner(System.in);
        String userInput = input.next();
        char grade = userInput.charAt(0);
        switch (grade) {
            case 'A':
                System.out.println("Excellent!");
                break;
            case 'B':
                System.out.println("Great!");
                break;
            case 'C':
            case 'D':
                System.out.println("Well done!");
                break;
            case 'F':
                System.out.println("Sorry, you failed.");
                break;
            default:
                System.out.println("Error! Invalid grade.");
        }
    }
}
