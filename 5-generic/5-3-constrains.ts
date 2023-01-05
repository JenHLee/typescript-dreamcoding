interface Employee {
    pay(): void;

}

class FullTimeEmployee implements Employee {
    pay(): void {
        console.log(`full time!!`);

    }
    workFullTime() {

    }
}

class PartTimeEmployee implements Employee {
    pay() {
        console.log(`part time!!`);

    }
    workPartTime() {

    }
}

// 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 💩💩💩
function payBad(employee: Employee): Employee {
    employee.pay();
    return employee;
}

function pay<T extends Employee>(employee: T) : T {
    employee.pay();
    return employee;
}

const jennie = new FullTimeEmployee();
const bob = new PartTimeEmployee();
jennie.workFullTime();
bob.workPartTime();

// payBad를 이용하면 employee가 fulltime인지 partime인지 정보를 잃어버림 
// as를 이용하여 그 값을 다시 저장함, 하지만 이는 좋지 못한 방법 💩💩💩
// 이를 예방하기위해 pay함수처럼 generic을 이용함 ✨✨✨
const jennieAfterPay = payBad(jennie) as FullTimeEmployee; 
const bobAfterPay = payBad(bob) as PartTimeEmployee;

const obj = {
    name: 'jennie',
    age: 20,
};

const obj2 = {
    animal: '🐶',
};


console.log(getValue(obj, 'name')); // jennie
console.log(getValue(obj, 'age')); // 20
console.log(getValue(obj2, 'animal')); // 🐶

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

