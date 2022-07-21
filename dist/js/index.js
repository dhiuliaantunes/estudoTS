"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let x = 10;
console.log(x);
//inferencia x annotation
//inferencia
let y = 12;
//annotation
let z = 12;
//tipos basicos
let firstName = "Dhiulia";
let age = 10;
const isValid = true;
//String != string
console.log(typeof firstName);
console.log(firstName.toUpperCase());
//object
const myNumbers = [1, 2, 3];
console.log(myNumbers);
console.log(myNumbers.length);
myNumbers.push(4);
console.log(myNumbers);
//tuplas
let myTuple;
myTuple = [2, "teste", ["a", "b"]];
console.log(myTuple);
//object literals -> {prop: value}
const user = {
    name: "dhiulia",
    age: 20
};
console.log(user);
console.log(user.name);
console.log(user.age);
//any aceita qualquer tipo
let a = 0;
a = "teste";
a = true;
a = 9;
//union type
let id = "10";
id = 100;
const userId = "10";
//enum
//tamanho de roupas (size: Medio, Pequeno, Grande)
var Size;
(function (Size) {
    Size["M"] = "M\u00E9dio";
    Size["P"] = "Pequeno";
    Size["G"] = "Grande";
})(Size || (Size = {}));
;
const camisa = {
    name: "camisa polo",
    size: Size.G
};
console.log(camisa);
//funcoes  necessidade de tipagem nos parametros
function sum(a, b) {
    return a + b;
}
;
console.log(sum(1, 2));
//o typescript nao permitira que os parametros nao sejam do tipo informado na funcao
function printName(name) {
    return `Hello ${name}`;
}
console.log(printName("mike"));
function logger(msg) {
    console.log(msg);
}
function loggerVoid(msg) {
    console.log(msg);
}
logger("teste");
function nomeEsobrenome(nome, sobrenome) {
    if (sobrenome) {
        console.log(nome + " " + sobrenome);
    }
    else {
        console.log(nome);
    }
}
nomeEsobrenome("dhiu", "silva");
nomeEsobrenome("dhiu");
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
;
console.log(sumNumbers({ n1: 2, n2: 3 }));
//narrowing
//checagem de tipos
function doSomething(info) {
    if (typeof info === "number") {
        console.log(`O número é ${info}`);
    }
    else {
        console.log(`O valor booleano é ${info}`);
    }
}
doSomething(7);
doSomething(true);
//generics
function showArrayItems(arr) {
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`);
    });
}
const a1 = [1, 2, 3];
const a2 = ['a', 'b', 'c'];
showArrayItems(a1);
showArrayItems(a2);
//classes
class User {
    constructor(name, role, isApproved) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
    showUserName() {
        console.log(`O nome do usuário é ${this.name}`);
    }
}
const dhiu = new User("dhiu", "estagiaria", true);
console.log(dhiu);
dhiu.showUserName();
class Car {
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrand() {
        console.log(`A marca do carro é ${this.brand}`);
    }
}
const fusca = new Car("Vw", 4);
fusca.showBrand();
//herança
class SuperCar extends Car {
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
}
const a4 = new SuperCar("Audi", 4, 2.0);
a4.showBrand();
//decotators
function BaseParams() {
    return function (constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.id = Math.random();
                this.createdAt = new Date();
            }
        };
    };
}
let Person = class Person {
    constructor(name) {
        this.name = name;
    }
};
Person = __decorate([
    BaseParams()
], Person);
const sam = new Person("sam");
console.log(sam);
