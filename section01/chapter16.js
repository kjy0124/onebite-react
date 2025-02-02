// 1. 상수 객체
const animal = {
  type: "강아지",
  name: "바둑이",
  color: "white",
};

animal.age = 2; // 추가
animal.name = "흰둥이"; // 수정
delete animal.color; //삭제
console.log(animal);

// 2. 메서드
// -> 값이 함수인 프로퍼티를 말함
const person = {
  name: "김종엽",

  //메서드
  // sayHi: () => {
  //   console.log("Hi");
  // },

  //메서드 선언
  sayHi() {
    console.log("Hi");
  },
};
person.sayHi();
person["sayHi"]();
