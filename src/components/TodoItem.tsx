import React from "react";

type Props = TodoProps & {
  updateTodo: (todo: ITodo) => void;
  deleteTodo: (_id: string) => void;
};

const TodoItems: React.FC<Props> = ({ todo, updateTodo, deleteTodo }) => {
  const checkTodo: string = todo.status ? `line-through` : "";
  return (
    <div className="Card Card--item">
      <div className="Card--text">
        <h1 className={`Card--text__header ${checkTodo}`}>{todo.name}</h1>
        <span className={`Card--text__subheader ${checkTodo}`}>
          {todo.description}
        </span>
      </div>
      <div className="Card--button">
        <button
          onClick={() => updateTodo({ ...todo, status: true })}
          className={todo.status ? `Card--button__hide` : "Card--button__done"}
        >
          Complete
        </button>
        <button
          onClick={() => deleteTodo(todo._id)}
          className="Card--button__delete"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItems;
