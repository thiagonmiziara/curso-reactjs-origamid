import { ready } from "jquery";
import React from "react";

function reducer(state, action) {
  switch (action.type) {
    case "remover":
      return state.filter(item => item !== action.content);
    case "adicionar":
      return [...state, action.content];
    default:
      throw new Error();
  }
}

const Exemplo1 = () => {
  const [state, dispatch] = React.useReducer(reducer, ["Banana", "Uva"]);

  return (
    <div>
      <h1>USEREDUCER EX2</h1>
      <div>
        <button
          onClick={() => dispatch({ type: "remover", content: "Banana" })}
        >
          Remover Banana
        </button>

        <button
          onClick={() => dispatch({ type: "adicionar", content: "Limão" })}
        >
          Adicionar Limão
        </button>

        <p>{state}</p>
      </div>
    </div>
  );
};

export default Exemplo1;
