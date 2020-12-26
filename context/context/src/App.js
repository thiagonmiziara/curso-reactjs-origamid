import React from "react";
import "./App.css";
import Produto from "./Produto";
import{GlobalStorage} from "./GlobalContext";
function App() {
  return (
    <GlobalStorage>
    <div className="App">
      <Produto />
    </div>
    </GlobalStorage>
  );
}

export default App;
