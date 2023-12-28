import React from "react";

const Input = ({ radioHandle, value, title, name }) => {
  return (
    <div>
      <input
        onChange={radioHandle}
        id="ff"
        value={value}
        type="radio"
        name={name}
      />
      <label className="ml-6" htmlFor="ff">
        {title}
      </label>
    </div>
  );
};

export default Input;
