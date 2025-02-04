// 1. 배열 순회
let arr = [1, 2, 3];

// 1.1 배열 인덱스
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

let arr2 = [4, 5, 6, 7, 8];
for (let i = 0; i < arr2.length; i++) {
  // console.log(arr2[i]);
}

// 1.2 for of 반복문
//for of는 배열에만 사용 가능

for (let item of arr2) {
  // console.log(item);
}

// 2. 객체 순회

let person = {
  name: "김종엽",
  age: 26,
  address: "Daegu",
};

// 2.1 Object.keys
// -> 주어진 객체에서 key 값만 뽑아서 새로운 배열로 반환
let keys = Object.keys(person);

for (let key of keys) {
  const value = person[key];
  console.log(key, value);
}

// 2.2 Object.values
// -> 주어진 객체에서 value 값만 뽑아서 새로운 배열로 반환
let values = Object.values(person);
for (value of values) {
  console.log(values);
}

// 2,3 for in
//for in은 객체에만 사용 가능

for (let key in person) {
  const value = person[key];
  console.log(key, value);
}
