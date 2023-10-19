package candidatura;

import java.text.NumberFormat;
import java.util.Random;
import java.util.concurrent.ThreadLocalRandom;

public class ProcessoSeletivo {
    public static void main(String[] args) {
        //selecaoCandidatos();
        String[] candidatos = { "FELIPE", "MARCIA", "JULIA", "PAULO", "AUGUSTO" };
        for (String candidato : candidatos) {
            entrandoEmContato(candidato);
        }
    }

    static void entrandoEmContato(String candidato) {
        int tentativasRealizadas = 1;
        boolean continuarTentando = true;
        boolean atendeu = false;

        do {
            atendeu = atender();
            continuarTentando = !atendeu;
            if (continuarTentando) {
                tentativasRealizadas++;
            } else {
                System.out.println("Contato realizado com sucesso");
            }
        } while (continuarTentando && tentativasRealizadas < 3);

        if (atendeu) {
            System.out.println("Conseguimos contato com " + candidato + " na " + tentativasRealizadas + " tentativa");
        } else {
            System.out.println("Não conseguimos contato com " + candidato + ", número máximo tentativas " + tentativasRealizadas + " realizadas");
        }
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

    //metodo para criar um valor de salario
    static double valorPretendido() {
        return ThreadLocalRandom.current().nextDouble(1800, 2200);
    }

    //metodo auxiliar
    static boolean atender() {
        return new Random().nextInt(3) == 1;
    }
}
