{
    type CoffeeCup = {
        shots: number,
        hasMilk: boolean;
    }

    // 의사소통을 하기위해서 지켜야하는 계약서 같은 역할 (추상화를 극대화하여 사용할 수 있음)
    // 인터페이스에 적어놓은 것은 클래스에서 무조건 구현해야함
    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    // CoffeeMachine 클래스는 CoffeeMaker 인터페이스를 implements하고 있기때문에 같은거라고 볼 수 있으나 
    // 차이는 interface와 가지고 있는 메소드가 다름
    class CoffeeMachine implements CoffeeMaker {
        private static BEANS_GRAM_PER_SHOT: number = 7; // class level 변하지 않는 숫자
        protected coffeeBeans: number = 0; // instacne (object) level 

        private constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBenas: number): CoffeeMachine { // static 변하지 않는 값, 즉 외부에서 누군가가 바꾸지 못하도록 만들기 위해 사용 -> 이런경우 constructor을 private으로 만들어 static method를 이용하게 하는 것을 권장
            return new CoffeeMachine(coffeeBenas);
        }

        fillCoffeeBeans(beans: number) { // 따로 작성하지 않으면 public
            if (beans < 0) {
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans += beans;
        }

        grindBeans(shots: number) {
            console.log(`grinding beans for ${shots}`);
            if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
                throw new Error('Not enough coffee beans!');
            }

            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
            return {
                shots, // shots:shots
                hasMilk: false,
            };
        }

        preheat(): void {
            console.log(`heating up...🔥`);
        }

        extract(shots: number): CoffeeCup {
            console.log(`Pulling ${shots} shots...☕`);
            return {
                shots, // shots:shots
                hasMilk: false,
            };
        }

        makeCoffee(shots: number): CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        }
    }

    const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
    maker.fillCoffeeBeans(30);
    maker.makeCoffee(2);
    console.log(maker);
   
    const maker1: CoffeeMaker = CoffeeMachine.makeMachine(32);
    // maker1.fillCoffeeBeans(30); // CoffeeMaker 인터페이스 안에는 fillCoffeeBeans라는 method가 존재하지 않으므로 사용 불가
    maker1.makeCoffee(2);
    console.log(maker1);

    // 접근제어자 (정보은닉:encapsulation)으로 추상화 가능 -> 필요한 함수만 노출 제어 private, protected, public
    // 인터페이스로 추상화 가능
    // 추상화된 클래스는 더욱 편리
}
