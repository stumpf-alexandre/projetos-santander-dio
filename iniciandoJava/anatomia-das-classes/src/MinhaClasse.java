public class MinhaClasse {
    public static void main(String[] args) {
        System.out.println("Ola turma, sejam bem-vindos");
        String primeiroNome = "Alexandre";
        String segundoNome = "Stumpf";

        String nome = nomeCompletos(primeiroNome, segundoNome);
        System.out.println(nome);
    }

    public static String nomeCompletos(String primeiroNome, String segundoNome) {
        return "Resultado do método " + 
        primeiroNome.concat(" ").concat(segundoNome);
    }
}