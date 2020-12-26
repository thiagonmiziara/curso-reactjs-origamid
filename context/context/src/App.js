import React from "react";
import "./App.css";
import Produto from "./Produto";
import{GlobalStorage} from "./GlobalContext";
import Limpar from "./Limpar";
function App() {
  return (
    <GlobalStorage>
    <div className="App">
      <Produto />
      <Limpar/>
    </div>
    </GlobalStorage>
  );
}

export default App;
