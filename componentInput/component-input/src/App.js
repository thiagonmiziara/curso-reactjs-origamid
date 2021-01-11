import React from "react";
import "./App.css";
import Input from "./Form/Input";
import Select from "./Form/Select";

const App = () => {
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [produto, setProduto] = React.useState("");

  return (
    <div className="App">
      <form>
        <Select
          options={["Smartphone", "Tablet"]}
          value={produto}
          setValue={setProduto}
        />

        <Input
          id="nome"
          label="Nome"
          value={nome}
          setValue={setNome}
          required
        />
        <Input id="email" label="Email" value={email} setValue={setEmail} />
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default App;
