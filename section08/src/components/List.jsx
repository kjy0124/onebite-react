import "./List.css";
import TodoItem from "./TodoItem";

const List = ({ todos }) => {
  return (
    <div className="List">
      <h4>TodoList 🌱</h4>
      <input type="text" placeholder="검색어를 입력하세요." />
      <div className="todos_wrapper">
        {todos.map((todo) => {
          return <TodoItem key={todo.id} {...todo} />;
        })}
      </div>
    </div>
  );
};

export default List;
