// 함수 선언
let area1 = getArea(10, 20);

console.log(area1);

//호이스팅
// -> 끌어올리다 라는 뜻
function getArea(width, height) {
  // 중첩 함수
  function another() {
    console.log("another");
  }

  another();
  let area = width * height;

  return area;
}
