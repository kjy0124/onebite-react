import "./App.css";
// import Header from "./components/Header";
// import Main from "./components/Main";
// import Footer from "./components/Footer";
// import Button from "./components/Button";

//state
import { useState } from "react";

function App() {
  //state(count)에는 위의 useState를 통해 생성한 state(count)의 값
  //setState(setCount)에는 state(count)의 값을 변경시키는 함수
  const [count, setCount] = useState(0);
  const [light, setLight] = useState("OFF");
  // const buttonProps = {
  //   text: "메일",
  //   color: "red",
  //   a: 1,
  //   b: 2,
  //   c: 3,
  // };
  return (
    <>
      <div>
        <h1>{light}</h1>
        <button
          onClick={() => {
            setLight(light === "ON" ? "OFF" : "ON");
          }}
        >
          {light === "ON" ? "끄기" : "켜기"}
        </button>
      </div>
      <div>
        <h1>{count}</h1>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
      </div>
      {/* <Button {...buttonProps} />
      <Button text={"카페"} />
      <Button text={"블로그"}>
        <Header / >
      </Button> */}
    </>
  );
}

export default App;
