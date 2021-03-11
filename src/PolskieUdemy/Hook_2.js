import React, { useState } from "react";
import "../index.css";

// useState example 2

const App = () => {
  const [counter, setCounter] = useState(0);
  

  const handler = () => setCounter(prevValue => prevValue + 1);
    
  return (
    <div
      onClick={handler}
      style={{ cursor: "pointer", textAlign: "center", margin: "100px" }}
      >
      <hr style={{margin:'10px'}}></hr>
      <h1>{counter} </h1>
      <button className="btn">licznik</button>
      <hr style={{margin:'10px'}}></hr>
    </div>
  );
};



export default App;