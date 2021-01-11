import React from "react";
import "./App.css";
import Checkbox from "./Form/Checkbox";
import Input from "./Form/Input";
import Radio from "./Form/Radio";
import Select from "./Form/Select";
import Validacao from "./Validacao";

const App = () => {
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [produto, setProduto] = React.useState("");
  const [cor, setCor] = React.useState("Vermelho");
  const [fruta, setFruta] = React.useState("Uva");
  const [linguagens, setLinguagem] = React.useState([]);
  const [termo, setTermo] = React.useState([]);

  return (
    <div className="App">
      <Validacao />
      <br />
      <form>
        <h2>Termos</h2>
        <Checkbox
          options={["Li e aceito os termos."]}
          value={termo}
          setValue={setTermo}
        />
        <h2>Checkbox</h2>
        <Checkbox
          options={["JavaScript", "Java", "PHP"]}
          value={linguagens}
          setValue={setLinguagem}
        />
        <h2>Cores</h2>
        <Radio options={["Azul", "Vermelho"]} value={cor} setValue={setCor} />
        <h2>Frutas</h2>
        <Radio
          options={["Limão", "Laranja", "Uva"]}
          value={fruta}
          setValue={setFruta}
        />
        <Select
          options={["Smartphone", "Tablet"]}
          value={produto}
          setValue={setProduto}
        />
        <Input
          id="nome"
          label="Nome"
          value={nome}
          //setValue={setNome}
          required
        />
        <Input id="email" label="Email" value={email} 
        //setValue={setEmail}
         />
        <button> Enviar </button>
      </form>
    </div>
  );
};

export default App;
