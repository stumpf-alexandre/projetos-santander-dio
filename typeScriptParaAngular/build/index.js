"use strict";
/*type heroi = {
    name: string;
    vulgo: string;
};

function printaObjetos(pessoa: heroi) {
    console.log(pessoa);
}

printaObjetos({
    name: "Bruce Wayne",
    vulgo: "Batman",
});*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//Variaveis
//tipos primitivos: boolean, number, string
let ligado = false;
//ou
let ligado1 = false;
let nome = "Alexandre";
let idade = 30;
let altura = 1.85;
//tipos especiais: null, undefined
let nulo = null;
let indefinido = undefined;
//tipos abrangentes: any, void
let retorno;
let retornoView = true;
//objeto sem previsibilidade
let produto = {
    name: "Alexandre",
    estado: "RS",
    idade: 43,
};
let meuProduto = {
    nome: "Tênis",
    preco: 200.90,
    unidade: 45,
};
//arrray
let dados = ["Alexandre", "Ana", "Lara"];
//ou
let dados2 = ["Alexandre", "Ana", "Lara"];
//multi types
let infos = ["Alexandre", 43, 11, "Ana", "Lara", 21];
//tuplas
let boleto = ["agua conta", 199.9, 32342342];
//datas
let aniversario = new Date("2023-09-10 5:00");
console.log(aniversario.toString());
//funções
function addNumber(x, y) {
    return x + y;
}
function addToHello(name) {
    return `Hello ${name}`;
}
let soma = addNumber(4, 7);
console.log(soma);
console.log(addToHello("Alexandre"));
//funções multi types
//explicita
function CallToPhone(phone) {
    return phone;
}
//implicita
function CallToPhone2(phone) {
    return phone;
}
//ou
function CallToPhone3(phone) {
    return phone;
}
console.log(CallToPhone(113133111));
console.log(CallToPhone("113133111"));
console.log(CallToPhone2(113133111));
console.log(CallToPhone2("113133111"));
console.log(CallToPhone3(113133111));
console.log(CallToPhone3("113133111"));
//funções asincronas
function getDatabase(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return "Alexandre";
    });
}
;
const bot = {
    id: 1,
    name: "megamen",
    type: "tipagem",
};
const bot2 = {
    id: 1,
    name: "megamen",
    type: "interface",
    sayHello() {
        return "hello";
    },
};
console.log(bot);
console.log(bot2);
//quando usar interface
class Pessoa {
    constructor(id, name, type) {
        this.id = id;
        this.name = name;
        this.type = type;
    }
    sayHello() {
        return `hello i'm ${this.name}`;
    }
}
const p = new Pessoa(3, "Stumpf", "interface");
console.log(p.sayHello());
//classes
/**
 * data modifiers(modifica os niveis de acesso)
 * public
 * private
 * protected
 * nas classes ou métodos
 * ? para uma propriedade não obrigatória
 * readonly para transformar uma propriedade em somente leitura
*/
class Characters {
    constructor(name, stregth, skill) {
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }
    attack() {
        console.log(`Attack with ${this.stregth} points`);
    }
}
const p1 = new Characters("Ryu", 10, 98);
console.log(p1);
p1.attack();
class Characters2 {
    constructor(name, stregth /*, skill: number*/) {
        this.name = name;
        this.stregth = stregth;
        //this.skill = skill;
    }
    attack() {
        console.log(`Attack with ${this.stregth} points`);
    }
}
const p2 = new Characters2("Ryu", 30);
console.log(p2);
//sub classe => Magician
//superclasse => Character
class Magician extends Characters {
    constructor(name, stregth, skill, magicPoints) {
        super(name, stregth, skill);
        this.magicPoints = magicPoints;
    }
}
const p3 = new Magician("Mago", 9, 30, 100);
console.log(p3);
//generics
function concatArray(...itens) {
    return new Array().concat(...itens);
}
const numArray = concatArray([1, 5], [3]);
console.log(numArray);
const stgArray = concatArray(["Alexandre", "goku"], ["vegeta"]);
console.log(stgArray);
//tipando um generics
function concatArray2(...itens) {
    return new Array().concat(...itens);
}
const numArray2 = concatArray2([1, 5], [3]);
console.log(numArray2);
const stgArray2 = concatArray2(["Alexandre", "goku"], ["vegeta"]);
console.log(stgArray2);
//decorators
function ExibirNome(target) {
    console.log(target);
}
//descomente ""experimentalDecorators": true," na pasta tsconfig.json
let Funcionario = class Funcionario {
};
Funcionario = __decorate([
    ExibirNome
], Funcionario);
