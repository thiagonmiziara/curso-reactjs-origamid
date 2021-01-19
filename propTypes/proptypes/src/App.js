import React from "react";
import Button from "./Button";
import Header from "./Memo/Header";
import Contar from "./useReduce/Contar";
const Contato = React.lazy(() => import("./Lazy/Contato"));

const App = () => {
  const [ativo, setAtivo] = React.useState(false);
  const [contar, setContar] = React.useState(0);

  return (
    <div>
      <div>
        <Header/>
        <button onClick={()=> setContar(contar +1)}>{contar}</button>
      </div>
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

      <div>
        <h1>UseReducer</h1>
        <Contar/>
      </div>
    </div>
  );
};

export default App;
