Array;
[1,2].map;

type Student = {
    passed: boolean;
}

const students: Student[] = [ {passed: false},{passed: false},{passed: true} ] // 하나라도 틀린게 있으면 false
const result = students.every(student => {
    return student.passed;
});

console.log(result);

class Animal{}
class Cat extends Animal{
    isCat: boolean = true;
}
class Dog extends Animal{
    isDog: boolean = false;
}

const animals: Animal[] = [new Cat(), new Cat(), new Dog()]; // false
const animals2: Animal[] = [new Cat(), new Cat(), new Cat()]; // true
function isCat(animal: Animal): animal is Cat{
    return (animal as Cat).isCat !== undefined;
}
console.log(animals.every<Cat>(isCat)); // false
console.log(animals2.every<Cat>(isCat)); // true