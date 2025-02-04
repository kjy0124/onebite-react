// 원시 타입 : (Number, String, Boolean 등) 값 자체로써 변수에 저장되고 복사된다. / 불변 값 (메모리 수정 x)
// 객체 타입 : (Object, Array, Function 등) 참조 값을 통해 변수에 저장되고 복사된다. / 가변 값 (메모리 수정 O)

// 1. 얕은 복사
// -> 객체의 참조 값을 복사
// -> 원본 객체가 수정될 수 있어 위험
let o1 = { name: "홍길동" };
let o2 = o1;
console.log(o2.name);
console.log(o1 === o2); //true

// 2. 깊은 복사
// -> 새로운 객체를 생성하면서 프로퍼티만 따로 복사
// -> 원본 객체가 수정될 일이 없어 안전
let o3 = { ...o1 };
console.log(o3.name);
console.log(o3 === o1); //false

// 얕은 비교
// -> 참조 값을 기준으로 비교
console.log(o1 === o3);

// 깊은 비교
// -> 객체를 문자열로 변환하여 비교
// -> JSON.stringify 등의 내장함수를 이용해야 함
console.log(JSON.stringify(o1) === JSON.stringify(o3));
