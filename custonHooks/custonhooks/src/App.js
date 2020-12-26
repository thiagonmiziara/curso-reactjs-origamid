import React from "react";
import "./App.css";
import useLocalStorage from "../src/Hooks/useLocalStorage/useLocalStorage";

function App() {
  const [produto,setProduto] = useLocalStorage('produto', '');

  function handleClick({target}){

    setProduto(target.innerText);

  }

  return <div className="App">
    <p>Produto preferido: {produto}</p>
    <button style={{margin: 10}}onClick={handleClick}>Notebook</button>
    <br/>
    <button onClick={handleClick}>Smartphone</button>
  </div>;
}

export default App;
