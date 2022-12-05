{
    // JavaScript 💩
    function jsAdd(num1, num2) {
        return num1 + num2;
    }

    // TypeScript ✨
    function add(num1: number, num2: number): number {
        return num1 + num2;
    }

    // JavaScript 💩
    function jsFetchNum(id) {
        // code ...
        // code ... 
        // code ... 
        return new Promise((resolve, reject) => {
            resolve(100);
        });
    }

    // TypeScript ✨
    function fetchNum(id: string): Promise<number> {
        // code ...
        // code ... 
        // code ... 
        return new Promise((resolve, reject) => {
            resolve(100);
        });
    }

    // JavaScript ✨ => TypeScript
    // Optional parameter // ?
    function printName(firstName: string, lastName?: string) {
    // function printName(firstName: string, lastName: string | undefined) { send parameter as string or undefined (null X)
        
        // console.log("firstName: " + firstName);
        // console.log("lastName: " + lastName);
    }
    printName('Steve', 'Jobs');
    printName('Ellie');
    printName('Anna', undefined);

    // Default parameter
    function printMessage(message: string = 'default message'){
        console.log(message);
    }
    printMessage();

    // Rest parameter
    function addNumbers (...numbers: number[]): any {
        return numbers.reduce((a, b) => a + b);

        // let result = 0;
        // numbers.forEach(element => {
        //     console.log("numbers---------" + numbers);
        //     console.log("element---------" + element);

        //    result = result + element;
        //    console.log("result------------------" + result);
        // });
        // return result;
    }

    console.log(addNumbers(1, 2));
    console.log(addNumbers(1, 2, 3, 4));
    console.log(addNumbers(1, 2, 3, 4, 5, 0));

        




}