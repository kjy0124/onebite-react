// 1. null 병합 연산자 : ??
// -> 존재하는 값을 추려내는 기능
// -> null, undefined가 아닌 값을 찾아내는 연산자

let var1;
let var2 = 10;
let var3 = 20;
let var4 = null;

// null이나 undefined가 아닌 값을 찾아냄
let var5 = var1 ?? var2;
let var6 = var1 ?? var4;

// 2. 삼항 연산자
// -> 항을 3개 사용하는 연산자
// -> 조건식을 이용해서 참, 거짓일 때의 값을 다르게 반환

let var7 = 9;

// 요구사항 : 변수 res에 var7의 값이 짝수면 "짝" / 홀수면 "홀"을 반환
let res = var7 % 2 === 0 ? "짝" : "홀";
console.log(res);
