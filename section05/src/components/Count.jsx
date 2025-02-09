//state
import { useState } from "react";

const Counter = () => {
  //state(count)에는 위의 useState를 통해 생성한 state(count)의 값
  //setState(setCount)에는 state(count)의 값을 변경시키는 함수
  const [count, setCount] = useState(0);
  return (
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
  );
};

export default Counter;
