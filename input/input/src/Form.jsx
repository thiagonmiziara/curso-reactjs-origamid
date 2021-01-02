import React from "react";

const Form = () => {
  const [form, setForm] = React.useState({
    nome: "",
    email: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log(event);
  }

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
    console.log(id, value);
  }

  return (
    <div className="App">
      <div>
        <br />
        <p>
          Exemplo de formulário com o useEstade como objeto para pegar os
          valores dos campos de input
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          name="nome"
          id="nome"
          value={form.nome}
          onChange={handleChange}
        />
        {form.nome}
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={form.email}
          onChange={handleChange}
        />
        {form.email}
        <br />
        <br />
        <div>
          <br />
          <button>Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
