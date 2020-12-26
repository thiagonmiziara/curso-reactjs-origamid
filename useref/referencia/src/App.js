import React from "react";
import "./App.css";

const App = () => {
  const video = React.useRef();

  React.useEffect(()=>{
    console.log(video.current);
    video.current.className="thiago"
  },[])
  return <div className="App">
    <video ref={video}></video>
  </div>;
};

export default App;
