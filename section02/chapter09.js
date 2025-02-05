// 5가지 배열 변형 메서드
// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환
let arr1 = [
  { name: "김종엽", hobby: "테니스" },
  { name: "홍길동", hobby: "테니스" },
  { name: "김유신", hobby: "독서" },
];

const tennisPeople = arr1.filter((item) => item.hobby === "테니스");
console.log(tennisPeople);

// 2. map
// 배열에 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환
let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item) => {
  return item * 2;
});
console.log(mapResult1);

const mapResult2 = arr1.map((item) => item.name);
console.log(mapResult2);

// 3. sort
// 배열을 사전 순으로 정렬하는 메서드
let arr3 = [10, 3, 5];
arr3.sort((a, b) => {
  if (a > b) {
    return 1; // b, a 배치
  } else if (a < b) {
    return -1; // a, b 배치
  } else {
    return 0; // 자리 그대로 유지
  }
});
console.log(arr3);

// 4. toSorted (가장 최근에 추가된 최신 함수)
// 정렬된 새로운 배열을 반환하는 메서드
let arr4 = ["c", "a", "b"];
let sorted = arr4.toSorted();

console.log(arr4);
console.log(sorted);

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드
let arr5 = ["hi", "hello", "world"];
const joined = arr5.join(" "); //join("구분자")
console.log(joined);
