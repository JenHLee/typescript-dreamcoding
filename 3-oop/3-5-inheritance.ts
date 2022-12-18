{
    type CoffeeCup = {
        shots: number,
        hasMilk: boolean;
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
            console.log('cleaning the machine...🧼');
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
            console.log(`heating up...🔥`);
        }

        extract(shots: number): CoffeeCup {
            console.log(`Pulling ${shots} shots...☕`);
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
        constructor(beans: number, public readonly serialNumber: string) { // 자식 클래스에서 생성자를 구현하는 경우, 부모의 생성자도 불러와야함
            super(beans);
        }
        private steamMilk(): void {
            console.log('Steaming some milk...🥛')
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
    const machine = new CoffeeMachine(23);
    const latteMachine = new CaffeLatteMachine(23, 'SSSS');
    const coffee = latteMachine.makeCoffee(1);
    console.log(coffee);
    console.log('Serial Number: ' + latteMachine.serialNumber);
}
