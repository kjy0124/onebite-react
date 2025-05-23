// 6가지 요소 조작 메서드
// 배열메서드1 요소조작

// 1. push
// 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
let arr1 = [1, 2, 3];
const newLength = arr1.push(4, 5, 6, 7);
console.log(arr1);
console.log(newLength); //arr1의 길이 반환

// 2. pop
// 배열의 맨 뒤에 있는 요소를 제거하고, 반환
let arr2 = [8, 9, 10];
const poppedItem = arr2.pop();
console.log(arr2);
console.log(poppedItem); //삭제된 값 출력

// 3. shift
// 배열에 맨 앞에 있는 요소를 제거, 반환
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();
console.log(arr3);
console.log(shiftedItem); //삭제된 값 출력

// 4. unshift
// 배열의 맨 앞에 새로운 요소를 추가하는 메서드
let arr4 = [4, 5, 6];
const unshiftItem = arr4.unshift(-1, 0);
console.log(arr4);
console.log(unshiftItem); //arr4의 길이 반환

// 5. slice
// 마치 가위처럼, 배열의 특정 범위를 잘라내서 새로운 배열로 반환
let arr5 = [1, 2, 3, 4, 5];
const sliced = arr5.slice(2, 5);
const sliced2 = arr5.slice(1, -2);
console.log(sliced);
console.log(arr5);
console.log(sliced2);

//6. concat
// 두 개의 서로 다른 배열을 이어 붙여서 새로운 배열 반환
let arr6 = [1, 2];
let arr7 = [3, 4];

let concatedArr = arr6.concat(arr7);
console.log(concatedArr);
