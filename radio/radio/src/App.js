import React from "react";
import "./App.css";

const App = () => {
  const [radio, setRadio] = React.useState("");
  const [cor , setCor] = React.useState('');

  function handleChange({ target }) {
    setRadio(target.value);
      }

  return (
    <div className="App">
      <form>
        <h2>Cores</h2>
        {cor}
        <label>
          <input
            type="radio"
            value="azul"
            name="cores"
            checked={cor === "azul"}
            onChange={({target})=> setCor(target.value)}
          />
          Azul
        </label>

        <label>
          <input
            type="radio"
            value="vermelho"
            name="cores"
            checked={cor === "vermelho"}
            onChange={({target})=> setCor(target.value)}
          />
          Vermelho
        </label>


        <h2>Produtos</h2>
        <label>
          <input
            type="radio"
            value="notebook"
            name="produto"
            checked={radio === "notebook"}
            onChange={handleChange}
          />
          Notebook
        </label>
        <label>
          <input
            type="radio"
            value="smartphone"
            name="produto"
            checked={radio === "smartphone"}
            onChange={handleChange}
          />
          Smartphone
        </label>
      </form>
      {radio}
    </div>
  );
};

export default App;
