import React from "react";
import Input from "../Form/Input";
import useInput from "../Hooks/useInput";

const Validacao = () => {
  const nome = useInput();
  const sobrenome = useInput(false);
  const email = useInput("email");
  const cep = useInput("cep");

  function handleSubmit(event) {
    event.preventDefault();
    if (
      cep.validate() &&
      email.validate() &&
      nome.validate() &&
      email.validate()
    ) {
      console.log("Enviar");
    } else {
      console.log("Não enviar");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Nome"
        id="nome"
        type="text"
        placeholder="Digite seu nome"
        {...nome}
      />
      <Input
        label="Sobrenome"
        id="sobrenome"
        type="text"
        placeholder="Digite seu sobrenome"
        {...sobrenome}
      />
      <Input
        label="Email"
        id="email"
        type="text"
        placeholder="seuemail@gmail.com"
        {...email}
      />
      <Input
        label="CEP"
        id="cep"
        type="text"
        placeholder="00000-000"
        {...cep}
      />

      <button>Enviar</button>
    </form>
  );
};

export default Validacao;
