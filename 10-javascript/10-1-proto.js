// Prototype-based Programming
// a style of OOP
// behavior reuse (inheritance)
// by reusing existing objects
// that serve as prototype

const x = {}; 
const y = {};
console.log(x); // [[Prototype]]: Object
console.log(y); // [[Prototype]]: Object
console.log(x.toString()); // [object Object]
console.log(x.___proto___ === y.___proto____); // true

const array = [];
console.log(array); // array -> Array 상속 -> Object 상속
// javascript의 모든 object는 object상속

console.clear();

function CoffeeMachine(beans){
    this.beans = beans;
    // Instance member level
    // this.makeCoffee = (shots) => {
    //     console.log('making...☕');
    // }
}

// Prototype member level
CoffeeMachine.prototype.makeCoffee = shots => {
    console.log('making...☕');
}

const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(20);
machine1.makeCoffee();

console.log(machine1); // machine -> CoffeeMachine 상속 -> Object 상속
console.log(machine2);

function LatteMachine(milk) {
    this.milk = milk;
}

LatteMachine.prototype = Object.create(CoffeeMachine.prototype);
const latteMachine = new LatteMachine(123);
console.log(latteMachine);
latteMachine.makeCoffee();