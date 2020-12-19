import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Produtos from "./Produtos";

const App = () => {
  const {pathname} = window.location;
  let Pagina;
  if(pathname === '/produtos'){
    Pagina = Produtos;
  }else{
    Pagina = Home;
  }

  return (
    <div className="App">
      <Header />
      <Pagina/>
    </div>
  );
};

export default App;
