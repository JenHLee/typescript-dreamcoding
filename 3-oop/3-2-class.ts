{
 
    type CoffeeCup = {
        shots: number,
        hasMilk: boolean;
    }

    Math.abs; // class level
    Math.PI; // class Level

    class CoffeeMaker {
        static BEANS_GRAM_PER_SHOT:number = 7; // class level 변하지 않는 숫자
        coffeeBeans: number = 0; // instacne (object) level

        constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        } // constructor = 생성자 : 이 클래스를 이용하여 object를 만들떄 항상 불리는 method 


        static makeMachine(coffeeBenas: number): CoffeeMaker{
            return new CoffeeMaker(coffeeBenas);
        }
        makeCoffee (shots: number) : CoffeeCup {
            if(this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
                throw new Error ('Not enough coffee beans!');
            }
            this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
            return {
                shots, // shots:shots
                hasMilk: false,
            };
        } 
    }

    const maker = new CoffeeMaker(32); // 생성자(constructor) 호출 
    console.log(maker);

    const maker1 = CoffeeMaker.makeMachine(3);
    console.log(maker1);
}
    
