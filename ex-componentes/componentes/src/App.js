import React from "react";
import { Header } from "../src/components/Header";
import Footer from "../src/components/Footer";
import "./App.css";
import Form from "./components/Form";

const Titulo = ({cor,texto, children}) => {
  return <h1 style={{color:cor}}>{texto},{children}</h1>;
};

const App = () => {
  return (
    <div className="App">
      <Titulo cor="red" texto="Meu titulo 1" >Isso é o CHILDREN</Titulo>
      <Titulo cor="blue" texto="Meu titulo 2" />

      <Header />
      <Form />
      <Footer />
    </div>
  );
};

export default App;
