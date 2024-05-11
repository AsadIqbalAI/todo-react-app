import React, { useState } from "react";
import Checkbox from "./Checkbox";
import Button from "./Button";
import "./main.css";

const TodoRow = ({ data, hadleComplete, handleDeleteTodo }) => {
  const [showButton, setShowButton] = useState(false);

  const handleMouseEnter = () => {
    setShowButton(true);
  };

  const handleMouseLeave = () => {
    setShowButton(false);
  };

  return (
    <div
      className={`todo-row flex flex-row gap-2 items-center justify-between w-full m-2 p-4 h-0 ${
        showButton ? "todo-row-btn" : ""
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Checkbox data={data} handleComplete={hadleComplete} />
      {showButton && (
        <Button
          text="X"
          version="small"
          id={data.id}
          handleDeleteTodo={handleDeleteTodo}
        />
      )}
    </div>
  );
};

export default TodoRow;
