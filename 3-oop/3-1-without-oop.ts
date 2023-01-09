{
    // 3-1-without-oop.ts
    const BEANS_GRAM_PER_SHOT:number = 7; 
    let coffeeBeans: number = 0;
    type CoffeeCup = {
        shots: number,
        hasMilk: boolean;
    }

    function makeCoffee (shots: number) : CoffeeCup {
        if(coffeeBeans < shots * BEANS_GRAM_PER_SHOT) {
            throw new Error ('Not enough coffee beans!');
        }
        coffeeBeans -= shots * BEANS_GRAM_PER_SHOT;
        return {
            shots, // shots:shots
            hasMilk: false,
        };
    } 
    
    coffeeBeans+= 3 * BEANS_GRAM_PER_SHOT;
    console.log("coffeeBeans: " + coffeeBeans);
    const coffee = makeCoffee(2);
    console.log(coffee);
}
    