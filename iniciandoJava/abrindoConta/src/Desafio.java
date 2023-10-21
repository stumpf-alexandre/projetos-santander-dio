import java.util.Scanner;

public class Desafio {

    public static void main(String[] args) {
      // Lendo os dados de Entrada:
      Scanner scanner = new Scanner(System.in);
      ContaBancaria cb = new ContaBancaria();
      int numeroConta = scanner.nextInt();
      scanner.nextLine(); // Consome a quebra de linha após a entrada do número da conta
      String nomeTitular = scanner.nextLine();
      double saldo = scanner.nextDouble();
  
 
      cb.numero = numeroConta;
      cb.titular = nomeTitular;
      cb.saldo = saldo;
      System.out.println("Informacoes:");
    
      System.out.println("Conta: " + cb.numero);
      System.out.println("Titular: " + cb.titular);
      System.out.println("Saldo: R$ " + cb.saldo);
    }
  }
  
  class ContaBancaria {
    int numero;
    String titular;
    double saldo;

    public ContaBancaria(int numero, String titular, double saldo) {
      this.numero = numero;
      this.titular = titular;
      this.saldo = saldo;
    }

    public ContaBancaria() {
    }
  }