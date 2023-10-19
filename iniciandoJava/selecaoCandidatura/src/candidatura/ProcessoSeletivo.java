package candidatura;
import java.util.Scanner;

public class ProcessoSeletivo {
    public static void main(String[] args) {
        
        analisarCandidato();
    }

    static void analisarCandidato() {
        Scanner sc = new Scanner(System.in);
        String nome;
        double pretencaoSalarial;
        double salarioBase = 2000.00;

        System.out.println("Informe seu nome: ");
        nome = sc.nextLine();

        System.out.println("Informe sua pretenção salarial: ");
        pretencaoSalarial = sc.nextDouble();

        if(pretencaoSalarial < salarioBase) {
            System.out.println("Ligar para o candidato " + nome);
        } else if(pretencaoSalarial == salarioBase) {
            System.out.println("Ligar para o candidato " + nome + ", com uma contra proposta");
        } else {
            System.out.println("Aguardando resultados com os demais candidatos");
        }
    }
}
