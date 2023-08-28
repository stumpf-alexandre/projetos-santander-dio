//vetores ou arrays
//como declarar um array
let array = ['string', 1, true];
console.log(array);

//guardando varios tipos de dados
let array2 = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']];
console.log(array2);

//forEach
array2.forEach(function(item, index){console.log(item, index)});

//push inclui novo elemento no final da lista
array2.push('novo item');
console.log(array2);

//pop exclui elemento no final da lista
array2.pop();
console.log(array2);

//shift exclui um elemento no inicio da lista
array2.shift();
console.log(array2);

//unshift inclui um elemento no inicio da lista
array2.unshift('novo item no inicio');
console.log(array2);

//indexOf retorna o índice de um valor
console.log(array2.indexOf(true));

//splice remove ou substitui um item pelo indice
array2.splice(0, 3);
console.log(array2);

//slice retorna uma parte de um array existente
let novoArray = array2.slice(0, 3);
console.log(novoArray);


//Objetos
let object = {string: 'string', number: 1, boolean: true, array: ["array"], objectInterno: {objectInterno: 'objeto interno'}};
console.log(object.string);
console.log(object.number);
console.log(object.boolean);
console.log(object.array);
console.log(object.objectInterno);

//desestruturação
var string = object.string;
console.log(string);

var arrayInterno = object.array;
console.log(arrayInterno);

var {string, boolean, objectInterno} = object;
console.log(string, boolean, objectInterno);