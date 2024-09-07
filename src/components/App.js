import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  const para= "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy";
  const [showPara, setPara]=useState(false);
  const btnHandle=()=>{
    setPara(true);
  }
  return (
    <div id="main">
      
      <button id="click" onClick={btnHandle}>Show Para</button>
      {showPara && <p id="para">{para}</p>}
    </div>
  );
}


export default App;
