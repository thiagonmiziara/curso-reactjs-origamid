import React from "react";
import "./App.css";

const App = () => {
  const livros = [
    { nome: "A Game of Thrones", ano: 1996 },
    { nome: "A Clash of Kings", ano: 1998 },
    { nome: "A Storm of Swords", ano: 2000 },
  ];

  const produtos = [
    {
      id: 1,
      nome: "Smartphone",
      preco: "R$ 2000",
      cores: ["#29d8d5", "#252a34", "#fc3766"],
    },
    {
      id: 2,
      nome: "Notebook",
      preco: "R$ 3000",
      cores: ["#ffd045", "#d4394b", "#f37c59"],
    },
    {
      id: 3,
      nome: "Tablet",
      preco: "R$ 1500",
      cores: ["#365069", "#47c1c8", "#f95786"],
    },
  ];

  const dados = produtos.filter(({ preco }) => {
    return Number(preco.replace("R$ ", "") > 1500);
  });

  return (
    <div>
      <h1>Arrays</h1>
      <>
        {livros
          .filter(({ ano }) => ano >= 1998)
          .map(({ nome, ano }) => {
            return (
              <ul key={nome}>
                <li>
                  {nome}, {ano}
                </li>
              </ul>
            );
          })}
      </>
      <section>
        {dados.map(({ id, nome, preco, cores }) => {
          return (
            <div key={id}>
              <h1>{nome}</h1>
              <p>Preço: {preco}</p>
              <ul>
                {cores.map((cor) => {
                  return (
                    <li
                      style={{
                        backgroundColor: cor,
                        color: "white",
                        fontSize: "25px",
                        marginBottom: "5px",
                        listStyle:'none'
                      }}
                      key={cor}
                    >
                      {cor}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default App;
