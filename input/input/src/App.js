import React from "react";
import "./App.css";
import Form from "./Form";

const App = () => {
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(event);
  }

  return (
    <div className="App">
      <h1>Thiago</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          name="nome"
          value={nome}
          id="nome"
          onChange={(event) => setNome(event.target.value)}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <button>Enviar</button>
      </form>

      <div>
        <br />
        <Form />
      </div>
    </div>
  );
};

export default App;
