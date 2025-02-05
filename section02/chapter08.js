// 5가지 요소 순회 및 탐색 메서드
// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];
arr1.forEach((item, idx) => {
  console.log(item, idx);
});

let doubledArr = [];
arr1.forEach((item) => {
  doubledArr.push(item * 2);
});
console.log(doubledArr);
console.log("-----------------------");

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = [1, 2, 3];
let isIncludes = arr2.includes(2);
console.log(isIncludes);

console.log("-----------------------");

// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
let arr3 = ["a", "b", "c"];
const index = arr3.indexOf("c");
console.log(index); //2번 인덱스에 있어서 2를 출력

console.log("-----------------------");

// 4. findIndex
// 모든 요소를 순회하면서, 콜백 함수를 만족하는 그런
// 특정 요소의 인덱스(위치)를 반환하는 인덱스
let arr4 = [1, 2, 3];
const findedIndex = arr4.findIndex((item) => item % 2 !== 0);
console.log(findedIndex);

// indexOf는 단순 ===과 같은 얕은 비교이기에 아래의 객체 타입 배열을 정확한 값을 조회하지 못한다.
// 그래서 객체 타입의 값들이 저장된 배열의 인덱스를 알고 싶다면
//findIndex는 콜백함수를 이용해서 특정 프로퍼티 값을 기준으로 비교시킬 수 있기 때문에 조건식만 잘 만들어 주면 index 값을 쉽게 찾을 수 있다.
let objArr = [{ name: "김종엽" }, { name: "종엽" }, { name: "엽" }];
console.log(objArr.findIndex((item) => item.name === "종엽")); // 인덱스 1 반환

console.log("-----------------------");

// 5. find
// 모든 요소를 순회하면서 콜백 함수를 만족하는 요소를 찾는데, 요소를 그대로 반환
let arr5 = [{ name: "김종엽" }, { name: "엽엽엽" }];
const finded = arr5.find((item) => item.name === "엽엽엽");
console.log(finded);
