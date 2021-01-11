import React from "react";
import Input from "../Form/Input";

const Validacao = () => {
  const [cep, setCep] = React.useState("");
  const [error, setError] = React.useState(null);

  function validateCep(value) {
    //funçao para verificar se o cep e valido
    if (value.length === 0) {
      setError("Preencha um valor");
      return false;
    } else if (!/^\d{5}-?\d{3}$/.test(value)) {
      setError("Preencha um CEP válido");
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function handleBlur({ target }) {
   validateCep(target.value);
  }

  function handleChange({target}){
    if(error){
      validateCep(target.value);
    }
    setCep(target.value)
  }

  function handleSubmit(event){
    event.preventDefault();
    if(validateCep(cep)){
      console.log('enviou');
    }else{
      console.log('Não enviar');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Validação Cep</h1>
      <Input
        type="text"
        label="CEP"
        id="cep"
        placeholder="00000-000"
        value={cep}
        setValue={setCep}
        onBlur={handleBlur}
        onchange={handleChange}
      />
      {error && <p>{error}</p> }
      <button>Enviar</button>
    </form>
  );
};

export default Validacao;
