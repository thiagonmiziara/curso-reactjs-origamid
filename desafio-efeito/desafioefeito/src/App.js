import React, { useState, useEffect } from "react";
import "./App.css";
import Produto from './produto';

const App = () => {
  
    const [produto, setProduto] = useState(null);

    function handleClick({ target }) {
      setProduto(target.innerText);
    }

    useEffect(() => {
      if (produto !== null) {
        window.localStorage.setItem("produto", produto);
      }
    }, [produto]);

    useEffect(() => {
      const produtoLocal = window.localStorage.getItem("produto");
      if (produtoLocal !== null) {
        setProduto(produtoLocal);
      }
    }, []);

    return (
      <div>
        <h1>Preferência: {produto}</h1>
        <button style={{ margin: "10px" }} onClick={handleClick}>
          Notebook
        </button>
        <button style={{ margin: "10px" }} onClick={handleClick}>
          Smartphone
        </button>
        <Produto produto={produto} />
      </div>
    );
  
};

export default App;
