import React from "react";

const Select = () => {
  const [select, setSelect] = React.useState("");
  return (
    <form>
      <select
        value={select}
        id="produtos"
        onChange={({ target }) => setSelect(target.value)}
      >
        <option disabled value="">Selecione</option>
        <option value="notbook">Notbook</option>
        <option value="smartphone">Smartphone</option>
        <option value="tablet">Tablet</option>
      </select>
      <br />
      <br />
      <div>{select}</div>
    </form>
  );
};

export default Select;
