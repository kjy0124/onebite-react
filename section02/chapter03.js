// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

let [one, two, three, four = 4] = arr;
console.log(one, two, three, four);

console.log("-----------------------");

// 2. 객체의 구조 분해 할당
let person = {
  name: "김종엽",
  age: 26,
  address: "Daegu",
};

let { name, age: myAge, address, job = "student" } = person;
console.log(name, myAge, address, job);

console.log("-----------------------");

// 3. 객체 구조분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({ name, age, address, job }) => {
  console.log(name, age, address, job);
};
func(person);
