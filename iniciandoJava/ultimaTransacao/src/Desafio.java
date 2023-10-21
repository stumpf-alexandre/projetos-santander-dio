import java.util.Scanner;

public class Desafio {
    
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);

    String entrada = scanner.nextLine();
    String[] partes = entrada.split(",");

    // TODO: Solicitar ao usuário que forneça os valores necessários para criar uma Transacao.
    Transacao tr = new Transacao(partes);
    
    tr.imprimir();
  }
}

class Transacao {
  private String data;
  private String hora;
  private String descricao;
  private double valor;

  public Transacao(String data, String hora, String descricao, double valor) {
    this.data = data;
    this.hora = hora;
    this.descricao = descricao;
    this.valor = valor;
  }
  
  public void imprimir() {
    System.out.println(this.descricao);
    System.out.println(this.data);
    System.out.println(this.hora);
    System.out.printf("%.2f", this.valor);
  }
  
    public Transacao(String[] partes) {
    this.data = partes[0];
    this.hora = partes[1];
    this.descricao = partes[2];
    this.valor = Double.parseDouble(partes[3]);
}
}