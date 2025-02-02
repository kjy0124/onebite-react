// 1. 콜백 홤수
function main(num) {
  num();
}

//sub 함수는 콜백 함수
function sub() {
  console.log("I am sub function1");
}

main(sub);

main(function () {
  console.log("I am sub Function2");
});

main(() => {
  console.log("I am sub function3");
});

console.log("----------------------");

// 2. 콜백 함수의 활용

function repeat(count, callBack) {
  for (let i = 0; i < count; i++) {
    callBack(i);
  }
}

repeat(5, function (i) {
  console.log(i);
});

console.log("----------------------");

repeat(5, (i) => {
  console.log(i * 2);
});

console.log("----------------------");

repeat(5, (i) => {
  console.log(i * 3);
});
