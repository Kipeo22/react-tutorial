import React from "react";

const Todo = ({ todo, toggleTodo }) => {
  const handleTodoclick = () => {
    toggleTodo(todo.id);
  };
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          readOnly
          onChange={handleTodoclick}
        />
      </label>
      {todo.name}
    </div>
  );
};

export default Todo;
