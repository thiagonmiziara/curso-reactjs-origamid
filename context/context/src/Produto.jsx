import React from "react";
import { GlobalContext } from "./GlobalContext";

const Produto = () => {
  const global = React.useContext(GlobalContext);

  return (
    <div>
      Produto:<span>{global.contar}</span>
      <button onClick={() => global.adicionarUm()}>Adicionar</button>
      <button onClick={() => global.adicionarDois()}>Adicionar 2</button>
    </div>
  );
};

export default Produto;
