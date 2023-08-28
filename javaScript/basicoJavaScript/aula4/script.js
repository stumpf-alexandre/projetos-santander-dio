//estrutura condicional
var jogador1 = 0;
var jogador2 = 0;
var placar;

if (jogador1 > 0) {
    console.log('Jogador 1 marcou ponto!');
} else if(jogador2 > 0) {
    console.log('Jogador 2 marcou ponto!')
} else {
    console.log('Ninguem marcou ponto!');
}

//ninho de if
if (jogador1 != -1 && jogador2 != -1) {
    if (jogador1 > 0) {
        console.log('Jogador 1 marcou ponto!');
    } else if(jogador2 > 0) {
        console.log('Jogador 2 marcou ponto!')
    } else {
        console.log('Ninguem marcou ponto!');
    }
} else {
    console.log('Jogador invalido');
}

//if ternário
jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores são válidos') : console.log('Os jogadores não são válidos');

if (jogador1 > 0 && jogador2 == 0) {
    console.log('Jogador 1 marcou ponto!');
    placar = jogador1 > jogador2;
} else if(jogador2 > 0 && jogador1 == 0) {
    console.log('Jogador 2 marcou ponto!')
    placar = jogador2 > jogador1;
} else {
    console.log('Ninguem marcou ponto!');
}

//usando switch/case
switch (placar) {
    case placar = jogador1 > jogador2 :
        console.log('Jogador 1 ganhou');
        break;
    case placar = jogador2 > jogador1 :
        console.log('Jogador 2 ganhou');
        break;
    default:
        console.log('Ninguem ganhou');
        break;
}


let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5'];
let object = {propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3'}

//for
for (let index = 0; index < array.length; index++) {
    console.log(index);
}

//for/in
for (let i in array) {
    console.log(i);
}

for (j in object) {
    console.log(j);
}

//for/of
for (k of array) {
    console.log(k);
}
//for/of não funciona direito com object
for (l of object.propriedade1) {
    console.log(l);
}

//while
var a = 0;
while (a < 10) {
    a++;
    console.log(a);
}

//do/while
var b = 0
do {
    b++;
    console.log(b);
} while (b < 10);