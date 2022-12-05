{
    /**
     * JavaScript
     * Primitive(simple type): number, string, boolena, bigint, symbol, null, undefined
     * Object(complicated type): function, array.....
     */

    // number
    const num: number = 1;
    const numMinus: number = -6;
    const numDecimal: number = 0.1;

    // string
    const str: string = 'hello';

    // boolean 
    const boal: boolean = true;

    // undefined
    let name: undefined; // 💩
    let age: number | undefined; // more useful
    age = undefined;
    age = 1;
    function find(): number | undefined {
        return undefined;
    }

    // null
    let person: null; // 💩
    let person2: string | null; // value is empty or not

    // unknown 💩
    let notSure: unknown = 0;
    notSure = 'hello';
    notSure = true;

    // any 💩
    let anything: any = 0;
    anything = 'hello';

    // void
    function print(): void {
        console.log('hello');
        return; // no return value 
    }

    let unusable: void = undefined; //💩

    // never
    function throwError(message: string): never {
        // message -> server (log)
        throw new Error(message);
        while (true) { }
    }

    let neverEnding: never; //💩

    // object
    let obj: object; //💩
    // let obj: object = [1, 4];
    function acceptSomeObject(obj: object) {}
    acceptSomeObject({ name: 'ellie'});
    acceptSomeObject({ animal: 'dog'});
}

