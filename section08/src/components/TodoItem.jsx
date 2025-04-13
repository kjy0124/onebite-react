import "./TodoItem.css";

const TodoItem = ({ id, isComplete, content, date, onUpdate }) => {
  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  return (
    <div className="TodoItem">
      <input
        key={id}
        checked={isComplete}
        type="checkbox"
        onChange={onChangeCheckbox}
      />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button>삭제</button>
    </div>
  );
};

export default TodoItem;
