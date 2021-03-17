import React, { useState } from "react";
import Counter from './Counter'
const App = () => {
  const [firstCounter, setFirstCounter] = useState(0);
  const [secondCounter, setSecondCounter] = useState(0);

  const increaseFirstCounter = () => setFirstCounter(firstCounter + 1);

  const increaseSecondCounter = () => setSecondCounter(secondCounter + 1);

  return (
    <div className="center">
      <h1>Counter</h1>
      <p>counter no. 1: {firstCounter}</p>
      <p>counter no. 2: {secondCounter}</p>
      <Counter index={1}/>
      <Counter index={2}/>
      
      <button onClick={increaseFirstCounter} className="btn_mar">add counter no.1 </button>
      <button onClick={increaseSecondCounter} className="btn_mar">add counter no.2 </button>
    </div>
  );
};

export default App;
