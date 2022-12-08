{
    /**
 * Type Inference
 */

let text = 'hello';
function print (message = 'hello'){ // if I put default parameter as a string type, then I can only use string type for message
    console.log(message);
}

print('hello');
// print(1); // that's why I can't send number to message

function add(x: number, y: number){
    return x + y;
}

const result = add (1, 2); // no need to put the type beside result, because it already assigned in add. result should be number
// const result1 = add (a, b); // I can only send number, string can't be sent
}