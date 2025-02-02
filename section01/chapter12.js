// 1. 함수 선언식
function funcA() {
  console.log("함수 선언식 funcA");
}

let varA = funcA;
varA();

// 2. 함수 표현식
// 함수 표현식은 함수가 값으로 취급을 받아 호이스팅 불가
//익명함수
// -> function 이름없음 () {}
let varB = function () {
  console.log("함수 표현식 funcB");
};
varB();

//3. 화살표 함수
let varC = (num) => `화살표 함수 funcC, ${num + 1}`;
varC(10);
console.log(varC(10));
