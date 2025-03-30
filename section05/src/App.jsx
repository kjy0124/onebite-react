import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  const addTodo = () => {
    setTodo([...todo, input]);
  };
  return (
    <>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTodo}>추가</button>
      </div>
      <ul>
        {todo.map((todoList, index) => (
          <li key={index}>{todoList}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
