import React from "react";

const ButtonModal = ({ setModal }) => {
  const handleClick = () => {
    setModal((ativo) => !ativo);
  };
  return <button onClick={handleClick}>Abrir</button>;
};

export default ButtonModal;
