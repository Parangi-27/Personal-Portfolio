import React from "react";
import './button.css'

const Button = ({ name = "name", onClick }) => {
  const onButtonClick = () => {
    if (onClick) {
      onClick(name);
    }
  };

  return (
    <div className="custombtn">
      <button className="btn16" onClick={onButtonClick}>
        {name}
      </button>
    </div>
  );
};

export default Button;