// function add(a, b, callback) {
//   setTimeout(() => {
//     const sum = a + b;
//     callback(sum); //매개변수로 받은 callback 함수를 호출하여 sum 깂을 전달
//   }, 3000);
// }
// add(1, 2, (value) => {
//   // value 값은 위의 콜백 함수로 이동하여 두 값을 더한 값이 전달됨.
//   console.log(value);
// });

// 음식을 주문 후 음식이 나오는 함수
function orderFood(callback) {
  setTimeout(() => {
    const food = "chicken";
    callback(food);
  }, 3000);
}

function cooldownFood(food, callback) {
  setTimeout(() => {
    const cooldownedFood = `식은 ${food}`;
    callback(cooldownedFood);
  }, 2000);
}

// cooldownFood를 냉동해버리는 함수
function freezeFood(food, callback) {
  setTimeout(() => {
    const freezedFood = `냉동된 ${food}`;
    callback(freezedFood);
  }, 1500);
}

orderFood((food) => {
  console.log(food);

  cooldownFood(food, (cooldownedFood) => {
    console.log(cooldownedFood);

    freezeFood(cooldownedFood, (freezedFood) => {
      console.log(freezedFood);
    });
  });
});
