
import React from 'react';

import './App.css';

const App =()=> {

 const handleClick=(event)=>{
  console.log(event);
 } 

 const handleScroll =(event)=>{
   console.log(event);
 }
 window.addEventListener('scroll', handleScroll)

  return (
    <div className="App" style={{height: '200vh'}}>
      <h1>Eventos</h1>
      <button onClick={handleClick}>Clique</button>
      <button onClick={()=> console.log('Clicou')}>Clicou</button>
    </div>
  );
}

export default App;
