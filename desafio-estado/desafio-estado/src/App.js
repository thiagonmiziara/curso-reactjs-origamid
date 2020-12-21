import React from "react";
import "./App.css";
import Produto from "./Produto";

const App = () => {
  const [dados, setDados] = React.useState(null);
  const [carregando, setCarregando] = React.useState(null);

  async function handleClick(event) {
    setCarregando(true);
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`
    );
    const json = await response.json();
    setDados(json);
    setCarregando(false);
  }

  return (
    <div className="App">
      <button style={{ marginRight: "10px" }} onClick={handleClick}>
        Smartphone
      </button>
      <button
        style={{
          backgroundColor: "yellowgreen",
          color: "white",
          marginRight: "10px",
        }}
        onClick={handleClick}
      >
        Tablet
      </button>
      <button
        style={{
          backgroundColor: "turquoise",
          color: "white",
          marginRight: "10px",
        }}
        onClick={handleClick}
      >
        Notebook
      </button>
      {carregando && <p>Carregando...</p>}
      {!carregando && dados && <Produto dados={dados} />}
    </div>
  );
};

export default App;
