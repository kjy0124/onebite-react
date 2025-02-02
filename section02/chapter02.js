// 단락 평가 활용 사례
function printName(person) {
  const name = person && person.name;
  console.log(name || "person name 없음");
}
printName();
printName({ name: "김종엽" });
