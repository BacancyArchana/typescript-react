import React, { useState } from "react";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";

import "./App.css";

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleSaveTodo = (formData: ITodo): void => {
    setTodos([...todos, formData]);
  };

  const handleUpdateTodo = (formData: ITodo): void => {
    const todosClone = [...todos];
    const index = todosClone.findIndex(
      (todo: ITodo) => todo._id === formData._id
    );
    if (index > -1) {
      todosClone[index] = formData;
    }
    setTodos([...todosClone]);
  };

  const handleDeleteTodo = (_id: string): void => {
    setTodos((prevTodos) => prevTodos.filter((t) => t._id !== _id));
  };

  return (
    <main className="App container">
      <h1 className="header">My Todos</h1>
      <AddTodo saveTodo={handleSaveTodo} />
      {todos.map((todo: ITodo) => (
        <TodoItem
          key={todo._id}
          updateTodo={handleUpdateTodo}
          deleteTodo={handleDeleteTodo}
          todo={todo}
        />
      ))}
    </main>
  );
};

export default App;
