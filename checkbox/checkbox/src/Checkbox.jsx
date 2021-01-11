import React from "react";

const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza'];

const Checkbox = () => {
  const [cores, setCores] = React.useState(['vermelho']);

  function handleChange({ target }) {
    //adiciona as cores Array
    if (target.checked) {
      setCores([...cores, target.value]);
    } else {
      //remove as cores de dentro do array
      setCores(cores.filter((cor) => cor !== target.value));
    }
  }

  function checkCor(cor){
    return cores.includes(cor);
  }

  return (
    <form>
      {coresArray.map((cor)=>(
        <label key={cor} style={{textTransform: 'capitalize'}}>
          <input
          type="checkbox"
          value={cor}
          checked={checkCor(cor)}
          onChange={handleChange}
        />
        {cor}
        </label>
      ))}
    </form>
  );
};

export default Checkbox;
