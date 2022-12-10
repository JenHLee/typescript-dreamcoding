/**
 * Let's make a calculator 🧮
 */
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

console.log(calculate('add', 1, 3)); // 4
console.log(calculate('substract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1

