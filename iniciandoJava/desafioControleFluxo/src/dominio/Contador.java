package dominio;
import java.util.Scanner;

import execao.ParametrosInvalidosException;

public class Contador {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Digite o 1º valor");
        int numA = lerNum(sc);
        System.out.println("Digite o 2º valor");
        int numB = lerNum(sc);

        try {
            contar(numA, numB);
        } catch (ParametrosInvalidosException e) {
            System.err.println("ERRO: " + e.getMessage());
        }
    }

    public static void contar(int A, int B) throws ParametrosInvalidosException {
        if (A >= B) {
            throw new ParametrosInvalidosException();
        } else {
            int resto = B - A;
            for (int i = 1; i <= resto; i++) {
                System.out.println("Imprimindo o número " + i);
            }
        }
    }

    public static int lerNum(Scanner sc) {
        while (true) {
            try {
                return Integer.parseInt(sc.nextLine());
            } catch (NumberFormatException e) {
                System.err.println("Digite apenas números inteiros");
            }
        }
    }
}