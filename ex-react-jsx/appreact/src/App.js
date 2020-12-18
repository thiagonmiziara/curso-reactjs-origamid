import React from "react";

const App = () => {
  const Titulo = <h1>Esse é um titulo</h1>;
  const nome = "Thiago";
  const numeroAleatorio = Math.random();
  const ativo = false;
  const carro = {
    marca: "Ford",
    rodas: 4,
  };

  const estilo = {
    color: "blue",
    fontSize: '50px'
  }
  return (
    <>
      <>{Titulo}</>
      <h1>Meu app</h1>
      <p style={estilo}>{new Date().getDate()}</p>
      <label htmlFor="nome">Nome</label>
      <input type="text" id="nome" />
      <p>{carro.marca}</p>
      <div>
        <h1 className={ativo ? "ativo" : "inativo"}>{nome}</h1>
        <h1>{numeroAleatorio * 100}</h1>
      </div>
    </>
  );
};

export default App;
