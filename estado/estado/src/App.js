import React from "react";
import "./App.css";
import ButtonModal from "./ButtonModal";
import Modal from "./Modal";

const App = () => {
  const [ativo, setAtivo] = React.useState(true);
  const [dados, setDados] = React.useState({ nome: "Thiago", idade: 33 });
  const [modal, setModal] = React.useState(false);

  function handleClick() {
    setAtivo(!ativo);
    setDados({ ...dados, faculdade: "Não possui" });
  }

  return (
    <div className="App">
      <p>Nome: {dados.nome}</p>
      <p>Idade: {dados.idade}anos</p>
      <p>Faculdade: {dados.faculdade}</p>
      <button onClick={handleClick}>
        {ativo ? "BTN ATIVO" : "Btn Inativo"}
      </button>
      <section>
        <div>{modal ? "Modal aberto" : "Modal fechado"}</div>
        <Modal modal={modal} setModal={setModal} />
        <ButtonModal setModal={setModal} />
      </section>
    </div>
  );
};

export default App;
