import { useState, useRef } from "react";
import "./App.css";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";

const mockData = [
  {
    id: 0,
    content: "React공부하기",
    isComplete: false,
    date: new Date().getTime(),
  },
  {
    id: 1,
    content: "밥먹기",
    isComplete: false,
    date: new Date().getTime(),
  },
  {
    id: 2,
    content: "잠자기",
    isComplete: false,
    date: new Date().getTime(),
  },
];
function App() {
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      content: content,
      isComplete: false,
      date: new Date().getTime(),
    };
    setTodos([newTodo, ...todos]);
  };

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} />
    </div>
  );
}

export default App;
