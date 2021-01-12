import React from 'react'
import Produto from './components/Produto';
import styled from 'styled-components';

const Titulo = styled.h1`
  color: red;
  font-size: 2rem;

`

const Paragrafo = styled.p`
font-size: 1rem;
color:#43c;
font-weight: bold;
font-size: 1.8rem;
`

const Preco = styled.p`
background: ${(props)=> props.cor};
font-size: 3rem;
font-weight: bold;
color: white;
`
const Comprar = styled.button`
background:${(props)=> props.ativo ? '#000 ': '#ccc'};
font-size: 1rem;
border: 2px solid black;
border-radius: 5px;
padding: .5rem;
color:white;
cursor: pointer;
&:hover{
  background: pink;
}
`

const App = () => {
  const [ativo,setAtivo] = React.useState(false);

  function handleClick(){
    setAtivo(!ativo);
  }

  return (
    <div>
      <Titulo>Styled components</Titulo>
     <Produto/>
     <Paragrafo>Este é um paragrafo com styled components</Paragrafo>
     <Preco cor="red">R$ 50.000,00</Preco>
     <Preco cor="#43c">R$ 50.000,00</Preco>
     <Comprar ativo={ativo} onClick={handleClick}>Comprar</Comprar>
    </div>
  );
}

export default App;
