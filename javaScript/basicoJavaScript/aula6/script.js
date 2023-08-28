//tipos de funções
//declarativa
function funcao() {
    console.log('Tudo certo Jovem');
}
funcao()

//expressões de funções
//com nomeação
var funcao = function funcao() {
    console.log('Sou uma mensagem de função de expressão, com nomeação!');
}
funcao();

//sem nomeação
var funcao = function() {
    console.log('Sou uma mensagem de função de expressão, sem nomeação!');
}
funcao();

//arrow function
var funcao = () => {
    console.log('Sou uma mensagem de arrow function!');
}
funcao();