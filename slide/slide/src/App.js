import React from "react";
import "./App.css";
import Slide from "./Slide";
import Img from "./img/foto.jpg";
import { ReactComponent as Dog } from "./img/dog.svg";
import DogSvg from "./DogSvg";

const App = () => {
  const [olho ,setOlho] = React.useState(0);

  function handleClik(){
    for(let i =0; i <6; i++){
      setTimeout(()=>{
        setOlho(i);
      },100 * i)
    }
    
  }

  return (
    <div>
      <Dog />
      <p className="fundo" onClick={handleClik}></p>
      <img className="fundo" src={Img} alt="Cachorro" />
      <Slide />
      <DogSvg color="#84e" olho={olho} />
    </div>
  );
};

export default App;
