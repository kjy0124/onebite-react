// 1. if 조건문
let num = 8;

if (num >= 9) {
  console.log("num은 9 이상입니다");
} else if (num <= 0) {
  console.log("num이 0 이하입니다.");
} else {
  console.log(`num은 ${num}입니다.`);
}

console.log("-------------------------");

// 2. Switch 문
// -> if 문과 기능 자체는 동일
// -> 다수의 조건을 처리할 때 if 보다 더 직관적이다.
let animal = "dog";

switch (animal) {
  case "cat": {
    console.log("고양이");
    break;
  }
  case "dog": {
    console.log("강아지");
    break;
  }
  case "snake": {
    console.log("뱀");
    break;
  }
  case "bear": {
    console.log("곰");
    break;
  }
  case "tiger": {
    console.log("호랑이");
    break;
  }
  default: {
    console.log("그런 동물 없다");
  }
}
