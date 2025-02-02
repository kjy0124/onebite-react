// 1. 객체 생성
let obj1 = new Object(); //객체 생성자
let obj2 = {}; // 객체 리터럴 (대부분 사용)

//객체 프로퍼티(객체 속성) : name, age, location, ...
// key: value 방식
const introduce = {
  name: "김종엽",
  age: 26,
  address: "Daegu",
  "like dog": true,
  10: 20,
};
console.log(introduce);

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근하는 방법 (점 표기법, 괄호 표기법)
let name = introduce.name;
console.log("이름 :", name);

let age = introduce["age"];
console.log(age);

let property = "address";
let address = introduce[property];
console.log(address);

console.log("---------------------");

// 3.2 새로운 프로퍼티를 추가하는 방법
introduce.job = "student";
introduce["favoriteFood"] = "pork";
console.log(introduce);

console.log("--------수정---------");

// 3.3 프로퍼티를 수정하는 방법
introduce.name = "KimJongYeop";
introduce.favoriteFood = "chicken";

console.log(introduce);

// 3.4 프로퍼티를 삭제하는 방법
delete introduce.job;
delete introduce[10];
console.log(introduce);

// 3.5 프로퍼티의 존재 유무 확인하는 방법 (in 연산자)
let result1 = "name" in introduce;
console.log(result1);
