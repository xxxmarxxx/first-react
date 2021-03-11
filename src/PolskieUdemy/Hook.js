import React, { useState } from "react";
import "../index.css";

// useState example 1

const App = () => {
    const [state, setState] = useState({ a: 0, b: 10 });

    const handler = () => setState({...state, a: state.a + 1});
    return (
      <div onClick={handler} style={{cursor:'pointer', textAlign:'center',margin:'100px'}}>
        <hr style={{margin:'10px'}}></hr>
        <h1>{state.a} </h1>
        <p>{state.b}</p>
        <hr style={{margin:'10px'}}></hr>
      </div>
    );
  };

  export default App;



