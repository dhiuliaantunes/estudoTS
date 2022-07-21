let x: number = 10;

console.log(x);

//inferencia x annotation
//inferencia
let y = 12;

//annotation
let z: number = 12;

//tipos basicos
let firstName: string = "Dhiulia";
let age: number = 10;
const isValid: boolean = true;

//String != string
console.log(typeof firstName);
console.log(firstName.toUpperCase());

//object
const myNumbers: number[] = [1, 2, 3]

console.log(myNumbers);
console.log(myNumbers.length);

myNumbers.push(4);
console.log(myNumbers);

//tuplas
let myTuple: [number, string, string[]];

myTuple = [2, "teste", ["a", "b"]];

console.log(myTuple);

//object literals -> {prop: value}
const user: {name: string, age: number} = {
    name: "dhiulia",
    age: 20
};

console.log(user);
console.log(user.name);
console.log(user.age);

//any aceita qualquer tipo
let a: any = 0;

a = "teste"
a = true
a = 9

//union type
let id: string | number = "10";

id = 100;

//type alias definindo o nome de um novo tipo
type myIdType = string | number;

const userId: myIdType = "10";

//enum
//tamanho de roupas (size: Medio, Pequeno, Grande)
enum Size{
    M = "Médio",
    P = "Pequeno",
    G = "Grande"
};

const camisa = {
    name: "camisa polo",
    size: Size.G
};

console.log(camisa);

//funcoes  necessidade de tipagem nos parametros
function sum(a: number, b: number){
    return a + b;
};

console.log(sum(1, 2));
//o typescript nao permitira que os parametros nao sejam do tipo informado na funcao

function printName(name: string): string{ //definindo o tipo do retorno
    return `Hello ${name}`;
}

console.log(printName("mike"));

function logger(msg: string){
    console.log(msg)
}

function loggerVoid(msg: string) : void{
    console.log(msg)
}

logger("teste")

function nomeEsobrenome(nome: string, sobrenome?: string){ //declarando que um parametro e opicional
    if(sobrenome){
        console.log(nome + " " + sobrenome);
    } else {
        console.log(nome);
    }
}

nomeEsobrenome("dhiu", "silva")
nomeEsobrenome("dhiu")

//interfaces
interface MathFunctionParams{
    n1: number,
    n2: number
}

interface MathFunctionParams2{
    n1: 2,
    n2: 3
}

function sumNumbers(nums : MathFunctionParams){
    return nums.n1 + nums.n2;
};

console.log(sumNumbers({n1:2, n2:3}))

//narrowing
//checagem de tipos
function doSomething(info: number | boolean){
    if(typeof info === "number"){
        console.log(`O número é ${info}`);
    } else{
        console.log(`O valor booleano é ${info}`);
    }
}

doSomething(7);
doSomething(true);

//generics
function showArrayItems<T>(arr: T[]){
    arr.forEach((item) =>{
        console.log(`ITEM: ${item}`)
    })
}

const a1 = [1, 2, 3]
const a2 = ['a', 'b', 'c']

showArrayItems(a1);
showArrayItems(a2);

//classes
class User{
    name
    role
    isApproved

    constructor(name: string, role: string, isApproved: boolean){
        this.name = name
        this.role = role
        this.isApproved = isApproved
    }

    showUserName(){
        console.log(`O nome do usuário é ${this.name}`)
    }
}

const dhiu = new User("dhiu", "estagiaria", true)
console.log(dhiu);

dhiu.showUserName();

//interfaces em classes
interface IVehicle{
    brand: string
    showBrand(): void
}

class Car implements IVehicle{
    brand
    wheels 

    constructor(brand: string, wheels: number){
        this.brand = brand
        this.wheels = wheels
    }

    showBrand(): void {
    console.log(`A marca do carro é ${this.brand}`)
    }
}

const fusca = new Car("Vw", 4);

fusca.showBrand();

//herança
class SuperCar extends Car{
    engine

    constructor(brand: string, wheels: number, engine: number){
        super(brand, wheels)
        this.engine = engine
    }
}

const a4 = new SuperCar("Audi", 4, 2.0);

a4.showBrand();

// onstructor decotators
//adicionando novos atributos ao contructor da classe person
function BaseParams(){
    return function<T extends {new(...args: any[]): {}}>(constructor: T){
       return class extends constructor{
        id = Math.random();
        createdAt = new Date();
       }
    }
}

@BaseParams()
class Person{
    name
    
    constructor(name: string){
        this.name = name
    }
}

const sam = new Person("sam")

console.log(sam)