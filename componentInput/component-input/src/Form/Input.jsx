import React from "react";

const Input = ({ id, label, value , onchange  , ...props}) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input 
      type="text" 
      id={id}
      name={id}
      value={value}
      onChange={onchange}
      {...props}
      />
    </>
  );
};

export default Input;
