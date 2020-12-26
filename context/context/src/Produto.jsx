import React from "react";
import { GlobalContext } from "./GlobalContext";

const Produto = () => {
  const {dados} = React.useContext(GlobalContext);
  console.log(dados);
  if (dados === null) {
    return null;
  } else {
    return (
      <div>
        Produto:
        {dados.map((produto, index) => (
          <li key={index}>{produto.nome}</li>
        ))}
      </div>
    );
  }
};

export default Produto;
