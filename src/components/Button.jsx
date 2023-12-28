import React from "react";

const Button = ({ buttonHandle, value, title }) => {
  return (
    <div>
      <button
        onClick={buttonHandle}
        value={value}
        className="py-2 px-4 border border-[#ccc] rounded-lg "
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
