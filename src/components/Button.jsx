import React from "react";

const Button = (props) => {
  return (
    <button
      className={`bg-[#4eb670] transition-1000 transition-easing ease-in-out 0.3s text-white text-center py-2 px-4 font-bold rounded ${
        props.version == "large" ? "w-[4rem]" : ""
      } ${props.version == "small" ? "w-[2.75rem]" : ""}`}
      onClick={() => {
        if (props.handleClick) {
          if (props.inputValue == "" || props.inputValue.length == 0) {
            alert("Please enter a value");
          } else {
            props.handleClick();
          }
        }
        if (props.id) {
          if (props.handleDeleteTodo) {
            props.handleDeleteTodo(props.id);
          }
        }
      }}
    >
      {props.text}
    </button>
  );
};

export default Button;
