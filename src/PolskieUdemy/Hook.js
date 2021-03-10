import React, { useState } from "react";
import "../index.css";

const App = () => {
  const [state, setState] = useState({ a: 0, b: 10 });

  const handler = () => setState({...state, a: state.a + 1});
  return (
    <div onClick={handler} style={{cursor:'pointer', textAlign:'center',margin:'200px'}}>
      <h1>{state.a} </h1>
      <p>{state.b}</p>
    </div>
  );
};

export default App;
