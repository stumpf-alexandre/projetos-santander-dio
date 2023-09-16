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

//Variaveis

//tipos primitivos: boolean, number, string
let ligado : boolean = false;
//ou
let ligado1 = false;
let nome : string = "Alexandre";
let idade : number = 30;
let altura : number = 1.85;
//tipos especiais: null, undefined
let nulo : null = null;
let indefinido : undefined = undefined;
//tipos abrangentes: any, void
let retorno : void;
let retornoView : any = true;
//objeto sem previsibilidade
let produto : object = {
    name : "Alexandre",
    estado : "RS",
    idade : 43,
};
//objeto tipado com previsibilidade
type ProdutoLoja = {
    nome : string;
    preco : number;
    unidade : number;
};
let meuProduto : ProdutoLoja = {
    nome : "Tênis",
    preco : 200.90,
    unidade : 45,
}

//arrray
let dados : string[] = ["Alexandre", "Ana", "Lara"];
//ou
let dados2 : Array<string> = ["Alexandre", "Ana", "Lara"];
//multi types
let infos : (string | number)[] = ["Alexandre", 43, 11, "Ana", "Lara", 21];

//tuplas
let boleto : [string, number, number] = ["agua conta", 199.9, 32342342];

//datas
let aniversario : Date = new Date("2023-09-10 5:00");
console.log(aniversario.toString());

//funções
function addNumber(x : number, y : number) : number{
    return x + y;
}

function addToHello(name : string):string {
    return `Hello ${name}`;
}

let soma : number = addNumber(4, 7);
console.log(soma);

console.log(addToHello("Alexandre"));

//funções multi types
//explicita
function CallToPhone(phone: number | string){
    return phone;
}
//implicita
function CallToPhone2(phone: number | string): number | string{
    return phone;
}
//ou
function CallToPhone3(phone: number | string): any{
    return phone;
}

console.log(CallToPhone(113133111));
console.log(CallToPhone("113133111"));
console.log(CallToPhone2(113133111));
console.log(CallToPhone2("113133111"));
console.log(CallToPhone3(113133111));
console.log(CallToPhone3("113133111"));

//funções asincronas
async function getDatabase(id: number): Promise<number | string>{
    return "Alexandre";
}

//interface (type x interface)
type robot = {
    readonly id: number | string; //readonly é só para leitura, sem modificação
    name: string;
    type: string;
};

interface robot2 {
    readonly id: number | string; //readonly é só para leitura, sem modificação
    name: string;
    type: string;
    sayHello(): string;
};

const bot: robot = {
    id: 1,
    name: "megamen",
    type: "tipagem",
};
const bot2: robot2 = {
    id: 1,
    name: "megamen",
    type: "interface",
    sayHello(): string {
        return "hello";
    },
};

console.log(bot);
console.log(bot2);

//quando usar interface
class Pessoa implements robot2{
    id: string | number;
    name: string;
    type: string;

    constructor(id: string | number, name: string, type: string){
        this.id = id
        this.name = name
        this.type = type
    }
    sayHello(): string {
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
    name: string;
    stregth: number;
    skill: number;

    constructor(name: string, stregth: number, skill: number) {
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }

    attack(): void {
        console.log(`Attack with ${this.stregth} points`);
    }
}

const p1 = new Characters("Ryu", 10, 98);
console.log(p1);
p1.attack();


class Characters2 {
    private name: string;
    readonly stregth: number;
    skill?: number;

    constructor(name: string, stregth: number/*, skill: number*/) {
        this.name = name;
        this.stregth = stregth;
        //this.skill = skill;
    }

    protected attack(): void {
        console.log(`Attack with ${this.stregth} points`);
    }
}

const p2 = new Characters2("Ryu", 30);
console.log(p2);

//sub classe => Magician
//superclasse => Character

class Magician extends Characters{
    magicPoints: number;
    constructor(
        name: string,
        stregth: number,
        skill: number,
        magicPoints: number
    ){
        super(name, stregth, skill);
        this.magicPoints = magicPoints;
    }
}

const p3 = new Magician("Mago", 9, 30, 100);
console.log(p3);

//generics
function concatArray(...itens: any[]): any[]{
    return new Array().concat(...itens);
}

const numArray = concatArray([1, 5], [3]);
console.log(numArray);

const stgArray = concatArray(["Alexandre", "goku"], ["vegeta"]);
console.log(stgArray);

//tipando um generics
function concatArray2<T>(...itens: T[]): T[]{
    return new Array().concat(...itens);
}

const numArray2 = concatArray2<number[]>([1, 5], [3]);
console.log(numArray2);

const stgArray2 = concatArray2<string[]>(["Alexandre", "goku"], ["vegeta"]);
console.log(stgArray2);

//decorators
function ExibirNome(target: any) {
    console.log(target);
}
//descomente ""experimentalDecorators": true," na pasta tsconfig.json
@ExibirNome
class Funcionario {}


//decorator a nivel de classe(função que retorna outra função)
function apiVersion(version: string) {
    return (target: any) => {
        Object.assign(target.prototype,{__version: version});
    };
}

@apiVersion("1.10")
class Api {}

const api = new Api();
//console.log(api.__version);
//não conseguimos compilar com npm run start, mas com npm run start:dev

//attribute decorator
function minLength(length: number){
    return (target: any, key: string) => {
        let _value = target[key];

        const getter = () => _value;
        const setter = (value: string) => {
            if (value.length < length) {
                throw new Error(`Tamanho menor do que ${length}`);
            } else {
                _value = value;
            }
        };

        Object.defineProperty(target, key, {
            get: getter, 
            set: setter,
        });
    };
}

class Api2 {
    @minLength(3)
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}
const api2 = new Api2("produtos");