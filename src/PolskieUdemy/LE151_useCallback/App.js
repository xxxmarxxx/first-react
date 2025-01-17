import React, { useCallback, useMemo, useState } from "react";
import Counter from "./Counter";
const App = () => {
  
  
  const increaseFirstCounter = useCallback(() => setFirstCounter(prevValue => prevValue + 1),[]);
  const increaseSecondCounter = useCallback(() => setSecondCounter(prevValue => prevValue + 1),[]);
  
  const [firstCounter, setFirstCounter] = useState(0);
  const [secondCounter, setSecondCounter] = useState(0);

  const firstCounterComponent = <Counter callback={increaseFirstCounter} index={1}/>;
  const secondCounterComponent = <Counter callback={increaseSecondCounter} index={2}/>;

  return (
    <div className="center">
      <h1>Counter / useCallback</h1>
      <p>counter no. 1: {firstCounter}</p>
      <p>counter no. 2: {secondCounter}</p>
      {firstCounterComponent}
      {secondCounterComponent}
      
    </div>
  );
};

export default App;
