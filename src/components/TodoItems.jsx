import "./CSS/TodoItems.css";

const TodoItems = ({ no, display, text, setTodos }) => {
  const deleteTodo = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.todoNo !== no));
  };

  const toggle = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.todoNo === no
          ? { ...todo, display: todo.display === "" ? "line-through" : "" }
          : todo
      )
    );
  };

  return (
    <div className="todo-items">
      <div className="todo-items-container" onClick={toggle}>
        {display === "" ? (
          <i className="fa-solid fa-check"></i>
        ) : (
          <i className="fa-solid fa-square-check"></i>
        )}
      </div>
      <div className={`todo-items-text ${display}`}>{text}</div>
      <i className="fa-solid fa-xmark" onClick={deleteTodo}></i>
    </div>
  );
};

export default TodoItems;
