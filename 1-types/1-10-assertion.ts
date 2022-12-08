{
    /**
     * Type Assertions 💩
     */
    function jsStrFunc(): any {
        // return 'hello';
        return 2;
    }
    const result = jsStrFunc();

    // casting
    console.log((result as string).length);// when return is 'hello' -> result is 5 || when return is 2 -> undefined, but no errors.
    console.log((<string>result).length);

    const wrong: any = 5;
    console.log((wrong as Array<number>).push(1)); // TypeError: wrong.push is not a function 😱

    function findNumbers(): number[] | undefined { // function finds numbers then return number[], or return undefined. 
        return undefined;
    }

    const numbers = findNumbers();
    // numbers.push(2); // 😱  // can't use, it could be undefined as well.
    numbers!.push(2); // 😱 can use, it means that is definetly number not undefined.

    const button = document.querySelector('class')
    button?.nodeValue; // it might be has a value but could be null as well. 

    const button1 = document.querySelector('class')!; // It is definetly value. 
    button1.nodeValue;
}