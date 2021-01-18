import React from "react";
import Button from "./Button";
const Contato = React.lazy(() => import("./Lazy/Contato"));

const App = () => {
  const [ativo, setAtivo] = React.useState(false);

  return (
    <div>
      <h1>propTypes</h1>
      <Button width={200}>Clique Aqui</Button>
      <div>
        <h1>Contato</h1>
        {ativo && (
          <React.Suspense fallback={<div>Carregando...</div>}>
            <Contato />
          </React.Suspense>
        )}
        <button onClick={()=> setAtivo(true)}>Clique</button>
      </div>
    </div>
  );
};

export default App;
