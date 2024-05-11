import React from "react";
import "./main.css";

const Checkbox = ({ data, handleComplete }) => {
  return (
    <div className="flex flex-row items-center ">
      <input
        type="checkbox"
        className={`rounded-full border-2 border-gray-200 w-6 h-6 appearance-none checked:bg-green-500 checked:border-none `}
        onClick={() => handleComplete(data.id)}
      />
      <p
        className={`ml-2 text-2xl font-semibold ${
          data.completed ? "line-through text-[#c1c1c1]" : "no"
        }`}
      >
        {data.todo}
      </p>
    </div>
  );
};

export default Checkbox;
