// math 모듈

// ESM에서는 앞에 export만 쓰면 됨
export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

//CJS(Commoon JavaScript 모듈 시스템)
//module이라는 내장 객체에
//exporst이라는 프로퍼티의 값으로 객체 저장
// module.exports = {
//   add,
//   sub,
// };

// default 를 사용하면 메인 js에서 호출할 때 중괄호 생략
export default function multiply(a, b) {
  return a * b;
}
