// this에서는 다른 object에 할당하면 this의 값을 잃어버릴 수 있음
// 이것 방지하기위해 bind 사용

console.log(this); // Window

function simpleFunc() {
  console.log(this);
}
simpleFunc(); // Window
window.simpleFunc(); // Window
console.clear();

class Counter {
  count = 0;
  increase = function () {
//   increase = () => { // bind 역할
    console.log(this); // Counter
  };
}

const counter = new Counter();
counter.increase();
const caller = counter.increase; // caller에서 this의 정보를 잃어버림
// const caller = counter.increase.bind(counter); // caller에서 this의 정보를 잃어버림
caller(); // undefined -> bind이용하면 counter나옴

// 우리가 선언한 함수는 global window로 설정됨.
// 변수는 const, let은 global window아님, 에외는 var 는 global window로 설정됨(💩).

class Bob{

}
const bob = new Bob();
bob.run = counter.increase;
bob.run(); // Bob {}

