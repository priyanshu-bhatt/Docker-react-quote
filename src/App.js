import { useEffect } from "react";

import { useState } from "react";
import "./App.css";

function App() {
  function randomcolor() {
    return Math.floor(Math.random() * 255);
  }

  function changeColor(color) {
    document.body.style.background = color;
}
  
function gfg_Run() {
    changeColor("rgba("+ randomcolor() + "," + randomcolor() + "," + randomcolor() + ")");
}   

  const [quote, setQuote] = useState("");
  let getQuote = async () => {
    let getdata = await fetch("https://api.quotable.io/random");
    let newdata = await getdata.json();
    console.log(newdata.content);

    setQuote(newdata);
  };
  useEffect(() => {
    getQuote();
  }, []);

  return (
    <>
    <h1 className="title">Quote Generator</h1>
    <div className="container">
    <div className="App">
      
      <h2>{quote.content}</h2>
      <h5>~{quote.author}</h5>
      <button onClick={() => {getQuote(); gfg_Run()}} className="btn btn-danger">Generate Quote</button>
 
      
     
      
    </div>
    </div>
    </>
  );
}

export default App;
