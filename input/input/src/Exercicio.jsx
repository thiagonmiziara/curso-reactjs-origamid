import React from "react";

const Exercicio = () => {
  const formFields = [
    {
      id: "nome",
      label: "Nome",
      type: "text",
    },
    {
      id: "email",
      label: "email",
      type: "email",
    },
    {
      id: "senha",
      label: "Senha",
      type: "password",
    },
    {
      id: "cep",
      label: "CEP",
      type: "text",
    },
    {
      id: "rua",
      label: "Rua",
      type: "text",
    },
    {
      id: "numero",
      label: "Numero",
      type: "text",
    },
    {
      id: "bairro",
      label: "Bairro",
      type: "text",
    },
    {
      id: "cidade",
      label: "Cidade",
      type: "text",
    },
    {
      id: "estado",
      label: "Estado",
      type: "text",
    },
  ];


  const [form, setForm] = React.useState(
    formFields.reduce((valorAnterior, field)=>{
      return{
        ...valorAnterior,
        [field.id]: '',
      };
    },{})
  );

  const [res, setRes] = React.useState(null)

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch("https://ranekapi.origamid.dev/json/api/usuario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    }).then((response) => {
      setRes(response);
    });
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        {formFields.map(({ id, label, type }) => (
          <div key={id}>
            <label htmlFor={id}>{label}</label>
            <input
              type={type}
              id={id}
              value={form[id]}
              onChange={handleChange}
            />
          </div>
        ))}
        {res && res.ok && <p>Formulário Envida com Sucesso</p>}
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default Exercicio;
