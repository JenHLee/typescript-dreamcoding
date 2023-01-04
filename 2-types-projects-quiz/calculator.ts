/**
 * Let's make a calculator 🧮
 */
console.log(calculate('add', 1, 3)); // 4
console.log(calculate('substract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1
console.log('------------------------');
console.log(calculate1('add', 1, 3)); // 4
console.log(calculate1('substract', 3, 1)); // 2
console.log(calculate1('multiply', 4, 2)); // 8
console.log(calculate1('divide', 4, 2)); // 2
console.log(calculate1('remainder', 5, 2)); // 1

// My Answer
function calculate(method: string, num1: number, num2: number) {
    let result: number = 0;
    switch (method) {
        case 'add': result = num1 + num2;
            return result;
        case 'substract': result = num1 - num2;
            return result;
        case 'multiply': result = num1 * num2;
            return result;
        case 'divide': result = num1 / num2;
            return result;
        case 'remainder': result = num1 % num2;
            return result;
    }
}

// Dream-coding Answer
type Command = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder'; // union
function calculate1(command:Command, a: number, b: number) {
    switch (command) {
        case 'add': return a + b;
        case 'substract': return a - b;
        case 'multiply': return a * b;
        case 'divide': return a / b;
        case 'remainder': return a % b;
        default:
            throw Error('unknown command!');

    }

}


