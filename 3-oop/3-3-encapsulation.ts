{
    type CoffeeCup = {
        shots: number,
        hasMilk: boolean;
    }

    // public: 외부에서 접근 가능
    // private: 어떤 누구라도 private의 대한 값은 외부에서 접근 불가
    // protected: 상속된 자식 클래스에서 접근 가능, 외부에서는 접근 불가
    class CoffeeMaker {
        private static BEANS_GRAM_PER_SHOT: number = 7; // class level 변하지 않는 숫자
        protected coffeeBeans: number = 0; // instacne (object) level 

        private constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        } // constructor = 생성자 : 이 클래스를 이용하여 object를 만들떄 항상 불리는 method 

        static makeMachine(coffeeBenas: number): CoffeeMaker { // static 변하지 않는 값, 즉 외부에서 누군가가 바꾸지 못하도록 만들기 위해 사용 -> 이런경우 constructor을 private으로 만들어 static method를 이용하게 하는 것을 권장
            return new CoffeeMaker(coffeeBenas);
        }

        fillCoffeeBeans(beans: number){ // 따로 작성하지 않으면 public
            if(beans < 0) {
                throw new Error('value for beans should be greater than 0'); 
            }
            this.coffeeBeans += beans;
        }

        makeCoffee(shots: number): CoffeeCup {
            if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
                throw new Error('Not enough coffee beans!');
            }
            this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
            return {
                shots, // shots:shots
                hasMilk: false,
            };
        }
    }

    const maker = CoffeeMaker.makeMachine(32);
    maker.fillCoffeeBeans(30);
    console.log(maker);
    // before private, it can be assigned
    // const maker = new CoffeeMaker(32); // 생성자(constructor) 호출 
    // maker.coffeeBeans = 3;
    // maker.coffeeBeans = -3; // invalid

}

