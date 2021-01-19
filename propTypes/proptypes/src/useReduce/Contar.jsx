import React from "react";
import Exemplo1 from "./Exemplo1";

function reducer(state, action) {
  switch (action) {
    case "somar":
      return state + 1;
    case "subtrair":
      return state - 1;
      default: 
      throw new Error();
  }
  /* if(action === 'somar'){
    return state +1
  }
   if(action ==='subtrair') {
    return state -1
  }
  return new Error('Error action não existe');
  */
}

const Contar = () => {
  const [state, dispatch] = React.useReducer(reducer, 0);

  return (
    <div>
      <button onClick={() => dispatch("somar")}>+</button>
      <button onClick={() => dispatch("subtrair")}>-</button>
      <p>{state}</p>
      <Exemplo1/>
    </div>
  );
};

export default Contar;
