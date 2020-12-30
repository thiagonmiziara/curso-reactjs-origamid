import React from "react";
import "./App.css";

const App = () => {
  const [nome, setNome] = React.useState("");
  return (
    <div className="App">
      <h1>Thiago</h1>
      <form>
        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          value={nome}
          id="nome"
          onChange={(event) => setNome(event.target.value)}
        />
      </form>
      <p>{nome}</p>
    </div>
  );
};

export default App;
