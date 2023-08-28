function calculadora() {
    const operacao = Number(prompt('Escolha uma operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão real (/)\n 5 - Divisão inteira (%)\n 6 - Potenciação (**)'));

    let n1;
    let n2;
    let resultado;

    switch (operacao) {
        case 1:
            soma();
            break;
        case 2:
            subtracao();
            break;
        case 3:
            multiplicacao();
            break;
        case 4:
            divisaoReal();
            break;
        case 5:
            divisaoInteira();
            break;
        case 6:
            potenciacao();
            break;
        default:
            alert('Digite um numero valido!');
            calculadora();
            break;
    }

    function valores() {
        n1 = Number(prompt('Insira o primeiro valor'));
        n2 = Number(prompt('Insira o segundo valor'));
        if (!n1 || !n2) {
            alert('Erro - parametros invalidos');
            calculadora();
        }
    }
    function soma() {
        valores();
        resultado = n1 + n2;
        alert(`${n1} + ${n2} = ${resultado}`);
        novaOperacao();
    }
    function subtracao() {
        valores();
        resultado = n1 - n2;
        alert(`${n1} - ${n2} = ${resultado}`);
        novaOperacao();
    }
    function multiplicacao() {
        valores();
        resultado = n1 * n2;
        alert(`${n1} * ${n2} = ${resultado}`);
        novaOperacao();
    }
    function divisaoReal() {
        valores();
        resultado = n1 / n2;
        alert(`${n1} / ${n2} = ${resultado}`);
        novaOperacao();
    }
    function divisaoInteira() {
        valores();
        resultado = n1 % n2;
        alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`);
        novaOperacao();
    }
    function potenciacao() {
        valores();
        resultado = n1 ** n2;
        alert(`${n1} elevado a ${n2} é igual a ${resultado}`);
        novaOperacao();
    }
    function novaOperacao() {
        let opcao = Number(prompt('Deseja faser outra operação?\n 1 - Sim\n 2 - Não'));

        if (opcao == 1) {
            calculadora();
        } else if (opcao == 2) {
            alert('Até mais!!!');
        } else {
            alert('Digite uma opção válida!');
            novaOperacao();
        }
    }
}
calculadora();