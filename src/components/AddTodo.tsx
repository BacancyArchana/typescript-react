import React, { useState } from "react";

type Props = {
  saveTodo: (formData: ITodo) => void;
};

const defaultData = {
  _id: `${new Date().getTime()}`,
  name: "",
  description: "",
  status: false,
  createdAt: "",
  updatedAt: "",
};

const AddTodo: React.FC<Props> = ({ saveTodo }) => {
  const [todo, setTodo] = useState<ITodo>({ ...defaultData });
  const [error, setError] = useState({
    name: false,
    description: false,
  });

  const handleChange = (name: string, value: string): void => {
    setTodo((prevTodo) => ({ ...prevTodo, [name]: value }));
  };

  const handleBlur = (name: string, value: string) => {
    setError((prevError) => ({ ...prevError, [name]: !value }));
  };

  const resetForm = (): void => {
    setTodo({ ...defaultData, _id: `${new Date().getTime()}` });
  };

  const handleSaveTodo = (): void => {
    if (!todo.name || !todo.description) {
      setError({
        name: !todo.name,
        description: !todo.description,
      });
    } else {
      saveTodo({
        ...todo,
        createdAt: new Date().toUTCString(),
      });
      resetForm();
    }
  };

  return (
    <div className="Card">
      <div className="Card--Form">
        <div className="Card--Form--inline">
          <div className="Card--Input">
            <label>Name</label>
            <input
              value={todo.name}
              onChange={(e) => {
                handleChange("name", e.target.value);
              }}
              onBlur={(e) => {
                handleBlur("name", e.target.value);
              }}
            />
            <div className="Card--Input__error">
              {error.name ? "Name is Required." : ""}
            </div>
          </div>
          <div className="Card--Input">
            <label>Description</label>
            <input
              value={todo.description}
              onChange={(e) => {
                handleChange("description", e.target.value);
              }}
              onBlur={(e) => {
                handleBlur("description", e.target.value);
              }}
            />
            <div className="Card--Input__error">
              {error.description ? "Description is Required." : ""}
            </div>
          </div>
        </div>

        <div className="Card--button">
          <button
            className="Card--button__add"
            onClick={() => handleSaveTodo()}
          >
            Add Todo
          </button>
          <button
            className="Card--button__secondary"
            onClick={() => resetForm()}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
