// JSX 주의사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다.
// 2. 숫자, 문자열, 배열 값만 정상적으로 랜더링 된다.
// 3. 모든 태그는 닫혀 있어야 한다.
// 4. 최상위 태그는 만드시 하나여야만 한다.

const Main = () => {
  const num = 11;
  const obj = { name: "김종엽" };

  return (
    <main>
      <h1>Main</h1>
    </main>
  );
};

export default Main;
