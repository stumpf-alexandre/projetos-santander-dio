package candidatura;

import java.text.NumberFormat;
import java.util.concurrent.ThreadLocalRandom;

public class ProcessoSeletivo {
    public static void main(String[] args) {
        selecaoCandidatos();
    }

    static void imprimirSelecionados() {
        String[] candidatos = { "FELIPE", "MARCIA", "JULIA", "PAULO", "AUGUSTO" };
        System.out.println("Imprimir a lista de candidatos informando o indice do elemento");

        int i = 0;
        for (String candidato : candidatos) {
            i++;
            System.out.println("O candidato de nº " + i + " é " + candidato);
        }
    }

    static void analisarCandidato(double pretencaoSalarial) {
        double salarioBase = 2000.00;

        if (pretencaoSalarial < salarioBase) {
            System.out.println("Ligar para o candidato");
        } else if (pretencaoSalarial == salarioBase) {
            System.out.println("Ligar para o candidato, com uma contra proposta");
        } else {
            System.out.println("Aguardando resultados com os demais candidatos");
        }
    }

    static void selecaoCandidatos() {
        String[] candidatos = { "FELIPE", "MARCIA", "JULIA", "PAULO", "AUGUSTO", "MONICA", "FABRICIO", "MIRELA",
                "DANIELA", "JORGE" };

        int candidatosSelecionados = 0;
        int candidatoAtual = 0;
        double salarioBase = 2000.00;
        NumberFormat z = NumberFormat.getCurrencyInstance();
        while (candidatosSelecionados < 5 && candidatoAtual < candidatos.length) {
            String candidato = candidatos[candidatoAtual];
            double salarioPretendido = valorPretendido();

            System.out.println(
                    "O candidato " + candidato + " solicitou este valor de salário R$" + z.format(salarioPretendido));
            if (salarioBase >= salarioPretendido) {
                System.out.println("O candidato " + candidato + " foi selecionado para a vaga");
                candidatosSelecionados++;
            }
            candidatoAtual++;
        }
    }

    static double valorPretendido() {
        return ThreadLocalRandom.current().nextDouble(1800, 2200);
    }
}
