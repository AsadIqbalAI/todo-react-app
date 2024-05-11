import React, { useState, useRef, useEffect } from "react";
import { v4 as uuid } from "uuid";
import Button from "./components/Button";
import TodoRow from "./components/TodoRow";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleAddTodo = () => {
    if (input) {
      setTodos([...todos, { todo: input, completed: false, id: uuid() }]);
      setInput("");
    }
  };
  const handleCompleteTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-app min-h-[60vh] bg-white shadow-[#ccc] shadow-xl w-[30rem] flex flex-col justify-between px-5 py-4 rounded-md">
      <h2 className="text-3xl font-bold">Todos</h2>
      <div className="todos-container py-2 min-h-100% w-auto">
        <div className="flex flex-col items-start justify-start">
          {todos.length > 0 ? (
            todos.map((todo) => (
              <TodoRow
                key={todo.id}
                data={todo}
                handleComplete={handleCompleteTodo}
                handleDeleteTodo={handleDeleteTodo}
              />
            ))
          ) : (
            <p className="text-center px-4 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              Add todos to get started
            </p>
          )}
        </div>
      </div>
      <div className="w-full">
        <hr className="border-1 border-black border-opacity-40 w-full my-2.5" />
        <div className="input-container flex items-center justify-center gap-1">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full p-2 border-2 border-gray-200 rounded-md"
          />
          <Button
            text="Add"
            version="large"
            handleClick={handleAddTodo}
            inputValue={input}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
