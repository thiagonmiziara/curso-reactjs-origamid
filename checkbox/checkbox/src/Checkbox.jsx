import React from "react";

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
      <label>
        <input
          type="checkbox"
          value="azul"
          checked={checkCor('azul')}
          onChange={handleChange}
        />
        Azul
      </label>

      <label>
        <input
          type="checkbox"
          value="vermelho"
          checked={checkCor('vermelho')}
          onChange={handleChange}
        />
        Vermelho
      </label>
    </form>
  );
};

export default Checkbox;
