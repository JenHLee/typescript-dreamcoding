// import add from './10-3-module1.js';
// import sum, {print as printNewName} from './10-3-module1.js'; 
// default로 export된 함수는 아무이름이나 지정 가능
// but default아닌 함수는 같은 이름이거나 as를 이용하여 다른 이름으로 지정 가능
import * as calculator from './10-3-module1.js';

console.log(calculator.default(1, 2)); // 3
console.log(calculator.print('hello print')); // hello print
console.log(calculator.number); // 10
