// 1. 묵시적 형 변환
// -> JS 엔진이 알아서 형 변환을 해주는 것

let num = 10;
let str = "20";

const result = num + str;

// 2. 명시적 형 변환
// -> 프로그래머 내장 함수 등을 이용해서 직접 형 변환을 명시
// 문자열 -> 숫자

let str1 = "20";
let strToNum1 = Number(str1);

//변수에 숫자가 아닌 문자열도 같이 있는 경우 문자열을 숫자로 바꿀 때
//parseInt && parseFloat사용 단 숫자가 앞에 있어야 형 변환 가능
// (문자열이 앞에 있으면 안됨)
let str2 = "10개";
let strToNum2 = parseInt(str2);

// 숫자 -> 문자열
let num1 = 20;
let numToString = String(num1);

console.log(numToString + "입니다.");
