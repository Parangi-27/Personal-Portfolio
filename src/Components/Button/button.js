import React from "react";
import "../global.css";

const Button = ({ name = "name", onClick }) => {
  const onButtonClick = () => {
    if (onClick) {
      onClick(name);
    }
  };

  return (
    <div className="custombtn">
      <button className="text-teal-300 border border-teal-300 uppercase py-2 px-2 hover:text-black hover:bg-teal-300  " onClick={onButtonClick}>
        {name}
      </button>
    </div>
  );
};

export default Button;