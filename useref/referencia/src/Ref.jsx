import React from "react";

const Ref = () => {
  const [carrinho, setCarrinho] = React.useState(0);
  const [notificacao, setNotificacao] = React.useState(null);
  const timeoutRef = React.useRef();

  function handleClick() {
    setCarrinho(carrinho + 1);

    setNotificacao("Item adicionado ao carrinho");

    clearTimeout(timeoutRef.current);
    
    timeoutRef.current = setTimeout(() => {
      setNotificacao(null);
    }, 2000);
  }

  return (
    <div>
      <p>{notificacao}</p>
      <button onClick={handleClick}>Adicionar Carrinho</button>
      <p>Items no carrinho: {carrinho}</p>
    </div>
  );
};

export default Ref;
