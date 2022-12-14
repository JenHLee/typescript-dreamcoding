{
    type CoffeeCup = {
        shots: number,
        hasMilk: boolean;
        hasSugar?: boolean;
    }
    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    class CoffeeMachine implements CoffeeMaker {
        public static BEANS_GRAM_PER_SHOT: number = 7;
        public coffeeBeans: number = 0;

        public constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBenas: number): CoffeeMachine {
            return new CoffeeMachine(coffeeBenas);
        }

        fillCoffeeBeans(beans: number) {
            if (beans < 0) {
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans += beans;
        }

        clean() {
            console.log('cleaning the machine...π§Ό');
        }

        private grindBeans(shots: number) {
            console.log(`grinding beans for ${shots}`);
            if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
                throw new Error('Not enough coffee beans!');
            }

            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
            return {
                shots,
                hasMilk: false,
            };
        }

        preheat(): void {
            console.log(`heating up...π₯`);
        }

        extract(shots: number): CoffeeCup {
            console.log(`Pulling ${shots} shots...β`);
            return {
                shots,
                hasMilk: false,
            };
        }

        makeCoffee(shots: number): CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        }
    }

    class CaffeLatteMachine extends CoffeeMachine {
        constructor(beans: number, public readonly serialNumber: string) { // μμ ν΄λμ€μμ μμ±μλ₯Ό κ΅¬ννλ κ²½μ°, λΆλͺ¨μ μμ±μλ λΆλ¬μμΌν¨
            super(beans);
        }
        private steamMilk(): void {
            console.log('Steaming some milk...π₯')
        }
        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            this.steamMilk();
            return {
                ...coffee,
                hasMilk: true
            }
        }
    }

class SweetCoffeeMaker extends CoffeeMachine{
    makeCoffee(shots: number): CoffeeCup {
        const coffee = super.makeCoffee (shots);
        return {
            ...coffee,
            hasSugar: true,
        }
    }
}

const machines: CoffeeMaker[] = [
    
    new CoffeeMachine(32),
    new CaffeLatteMachine(16, '1'),
    new SweetCoffeeMaker(16),
    new CoffeeMachine(16),
    new CaffeLatteMachine(16, '1'),
    new SweetCoffeeMaker(16),
];
machines.forEach(machine => {
    console.log('-------------------------');
    machine.makeCoffee(1);
})

    const machine = new CoffeeMachine(23);
    const latteMachine = new CaffeLatteMachine(23, 'SSSS');
    const coffee = latteMachine.makeCoffee(1);
    console.log(coffee);
    console.log(machine);
    console.log('Serial Number: ' + latteMachine.serialNumber);
}

