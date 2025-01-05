import { useEffect, useRef, useState } from "react";
import "./CSS/Todo.css";
import TodoItems from "./TodoItems";

let count = 0;

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);

  const addTodo = () => {
    const newTodo = inputRef.current.value.trim();
    if (!newTodo) return; // Prevent empty todos
    const updatedTodos = [...todos, { todoNo: count++, text: newTodo, display: "" }];
    setTodos(updatedTodos);
    inputRef.current.value = "";
    localStorage.setItem("todos_count", count);
  };

  // Load todos from localStorage on component mount
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(savedTodos);
    count = parseInt(localStorage.getItem("todos_count"), 10) || 0;
  }, []);

  // Save todos to localStorage whenever `todos` changes
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="todo">
      <div className="todo-header">Todo List</div>
      <div className="todo-add">
        <input
          type="text"
          placeholder="Add your Task"
          className="todo-input"
          ref={inputRef}
        />
        <div className="todo-add-btn" onClick={addTodo}>
          ADD
        </div>
      </div>
      <div className="todo-list">
        {todos.map((item) => (
          <TodoItems
            setTodos={setTodos}
            key={item.todoNo}
            no={item.todoNo}
            display={item.display}
            text={item.text}
          />
        ))}
      </div>
    </div>
  );
};

export default Todo;
