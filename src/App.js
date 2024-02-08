import { useState, useRef } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todos, setTodo] = useState([]);

  const todoNameuseRef = useRef();

  const handleAddTodo = () => {
    // タスクを追加
    const name = todoNameuseRef.current.value;
    if (name === "") return;
    setTodo((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, completed: false }];
    });
    todoNameuseRef.current.value = null;
  };

  const toggleTodo = (id) => {
    const newTodos = [...todos]; //newTodosに一旦コピー
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodo(newTodos);
  };

  const handleClear = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodo(newTodos);
  };

  return (
    <div>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input type="text" ref={todoNameuseRef} />
      <button onClick={handleAddTodo}>タスクを追加</button>
      <button onClick={handleClear}>完了したタスクの削除</button>
      <div>残りのタスク: {todos.filter((todo) => !todo.completed).length}</div>
    </div>
  );
}

export default App;
