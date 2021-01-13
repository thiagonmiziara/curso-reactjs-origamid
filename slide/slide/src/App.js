import React from "react";
import "./App.css";
import Slide from "./Slide";
import Img from "./img/foto.jpg";
import { ReactComponent as Dog } from "./img/dog.svg";


const App = () => {
 

  return (
    <div>
      <Dog />
      <p className="fundo"></p>
      <img className="fundo" src={Img} alt="Cachorro" />
      <Slide />
     
    </div>
  );
};

export default App;
