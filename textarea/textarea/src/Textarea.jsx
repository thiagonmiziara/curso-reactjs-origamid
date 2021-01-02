import React from "react";

const Textarea = () => {
  const [mensagen, setMensagen] = React.useState("");
  return (
    <form>
      <textarea
        id="mensagem"
        rows="5"
        value={mensagen}
        onChange={({ target })=> setMensagen(target.value)}
      />
      <br/>
      <p>{mensagen}</p>
    </form>
  );
};

export default Textarea;
