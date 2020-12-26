import React from "react";
import Ref from './Ref';
import "./App.css";

const App = () => {
  const [comentarios, setComentarios] = React.useState([]);
  const [input, setInput] = React.useState("");
  const inputElemtent = React.useRef();

  function handleClick() {
    setComentarios([...comentarios, input]);
    setInput("");
    inputElemtent.current.focus();
  }

 

  return (
    <div className="App">
      <div>
        <Ref/>
      </div>

      <ul>
        {comentarios.map((comentario, index) => (
          <li key={index}>{comentario}</li>
        ))}
      </ul>
      <input
        ref={inputElemtent}
        type="text"
        value={input}
        onChange={({ target }) => setInput(target.value)}
      />
      <br />
      <button onClick={handleClick}>Enviar</button>
    </div>
  );
};

export default App;
