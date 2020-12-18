import React from 'react';
import {Header} from '../src/components/Header';
import Footer from '../src/components/Footer';
import './App.css';
import Form from './components/Form';

const App=()=> {
  return (
    <div className="App">
      <Header/>
      <Form/>
      <Footer/>
    </div>
  );
}

export default App;
