console.log(1); //동기

//setTimeout : 비동기 기능을 가지며 일정 시간이 지난 후 코드 실행
setTimeout(() => {
  console.log(2);
}, 3000);
console.log(3); //동기
