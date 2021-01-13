import React from "react";
import Produto from "./components/Produto";
import styled from "styled-components";
import Card from "react-bootstrap/Card";

const Titulo = styled.h1`
  color: red;
  font-size: 2rem;
`;
const Paragrafo = styled.p`
  font-size: 1rem;
  color: #43c;
  font-weight: bold;
  font-size: 1.8rem;
`;
const Preco = styled.p`
  background: ${(props) => props.cor};
  font-size: 3rem;
  font-weight: bold;
  color: white;
`;
const Comprar = styled.button`
  background: ${(props) => (props.ativo ? "#000 " : "#ccc")};
  font-size: 1rem;
  border: 2px solid black;
  border-radius: 5px;
  padding: 0.5rem;
  color: white;
  cursor: pointer;
  &:hover {
    background: pink;
  }
`;
const App = () => {
  const [ativo, setAtivo] = React.useState(false);

  function handleClick() {
    setAtivo(!ativo);
  }

  return (
    <div>
      <Titulo>Styled components</Titulo>
      <Produto />
      <Paragrafo>Este é um paragrafo com styled components</Paragrafo>
      <Preco cor="red">R$ 50.000,00</Preco>
      <Preco cor="#43c">R$ 50.000,00</Preco>
      <Comprar ativo={ativo} onClick={handleClick}>
        Comprar
      </Comprar>
      <br />
      <h1 style={{ textAlign: "center" }}>Bootstrap ex:1</h1>

      <div
        className="card bg-dark text-white m-5"
        style={{ maxWidth: "18rem" }}
      >
        <div className="card-header">Notebook</div>
        <div className="card-body">
          <h5 className="card-title">R$ 2.500,00</h5>
          <p className="card-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            porro dicta, fuga quam, distinctio laudantium architecto aliquam
            totam numquam facere adipisci enim veniam amet rerum omnis expedita
            tenetur dolores asperiores?
          </p>
        </div>
      </div>

      <br />

      <h1 style={{ textAlign: "center" }}>React-Bootstrap ex:2</h1>

      <Card
        bg="dark"
        text="white"
        className="m-5"
        style={{ maxWidth: "18rem" }}
      >
        <Card.Header>Notebook</Card.Header>
        <Card.Body>
          <Card.Title>R$ 2.500,00</Card.Title>
          <Card.Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            porro dicta, fuga quam, distinctio laudantium architecto aliquam
            totam numquam facere adipisci enim veniam amet rerum omnis expedita
            tenetur dolores asperiores?
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default App;
