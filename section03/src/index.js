// require은 CJS 일 때 사용
// const { add, sub } = require("./math.js");

// ESM에서는 import 사용
//multiply는 default를 사용하였기에 중괄호 생략, 마음대로 함수 이름 고쳐서 사용 가능
import mul, { add, sub } from "./math.js";

console.log(add(1, 2));
console.log(sub(1, 2));
console.log(mul(2, 3));
