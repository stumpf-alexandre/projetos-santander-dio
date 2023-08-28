//tipos primitivos
//booleanos
var vOuF = false;
console.log(typeof(vOuF));

//number
var numeroQualquer = 1;
console.log(typeof(numeroQualquer));

//string
var nome = alexandre;
console.log(typeof(nome));

//function
var funcao = function(){}
console.log(typeof(funcao));

//como declarar
//var
var variavel = 'alexandre';
variavel = 'diana';
console.log(variavel);

//let
let variavel2 = 'luis';
variavel2 = 'diana';
console.log(variavel2);

const constante = 'alexandre luis'
console.log(constante);

//escopo
//global
var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoLocal() {
    let escopoLocalInterno = 'local'
    console.log(escopoLocalInterno);
}
//não podemos chamar uma variavel local fora do escopo
console.log(escopoLocalInterno);
escopoLocal();

//atribuição, comparação e comparação identica
//atribuição
var atribuicao = 'alexandre';

//comparação
var comparacao = '0' == 0;
console.log(comparacao);

//comparação identica
var comparacaoIdentica = '0' === 0;

//operadores aritméticos
//adição
var adicao = 1 + 1;
console.log(adicao);

//subtração
var subtracao = 2 - 1;
console.log(subtracao);

//multiplicação
var multiplicacao = 2 * 3;
console.log(multiplicacao);

//divisão real
var divisaoReal = 6 / 2;
console.log(divisaoReal);

//divisão inteira
var divisaoInteira = 5 % 2;
console.log(divisaoInteira);

//potenciação
var potenciacao = 2 ** 10;
console.log(potenciacao);

//operadores relacionais
//maior que
var maiorQue = 5 > 2;
console.log(maiorQue);

//menorQue
var menorQue = 5 < 2;
console.log(menorQue);

//maior ou igual a
var maiorOuIgual = 5 >= 2;
console.log(maiorOuIgual);

//menor ou igual a
var menorOuIgual = 5 <= 2;
console.log(menorOuIgual);

//operadores lógicos
//and
var e = true && false;
console.log(e);

//or
var ou = true || false;
console.log(ou);

//not
var nao = !true;
console.log(nao);