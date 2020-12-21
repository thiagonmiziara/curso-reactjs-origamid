import React from "react";
import "./App.css";
import ButtonModal from "./ButtonModal";
import Modal from "./Modal";

const App = () => {
  const [ativo, setAtivo] = React.useState(true);
  const [dados, setDados] = React.useState({ nome: "Thiago", idade: 33 });
  const [modal, setModal] = React.useState(false);
  const [items, setItems] = React.useState(["Item 1"]);
  const [contar, setContar] = React.useState(1);

  function handleClick() {
    setAtivo(!ativo);
    setDados({ ...dados, faculdade: "Não possui" });
    setContar((contar) => {
      return contar + 1;
    });
    setItems((items) => [...items, "Item" + (contar + 1)]);
  }

  return (
    <div className="App">
      <p>Nome: {dados.nome}</p>
      <p>Idade: {dados.idade}anos</p>
      <p>Faculdade: {dados.faculdade}</p>
      <button onClick={handleClick}>{ativo ? "Ativo" : "Inativo"}</button>
      <section>
        <div>{modal ? "Modal aberto" : "Modal fechado"}</div>
        <Modal modal={modal} setModal={setModal} />
        <ButtonModal setModal={setModal} />
      </section>
      <div>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
        <button style={{ margin: "10px" }} onClick={handleClick}>
          {contar}
        </button>
      </div>
    </div>
  );
};

export default App;
