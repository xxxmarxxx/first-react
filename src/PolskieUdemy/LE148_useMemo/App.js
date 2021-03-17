import React, { useMemo, useState } from "react";
import Counter from "./Counter";
const App = () => {
  const [state, setState] = useState({ x: 0, y: 0 });
  const [firstCounter, setFirstCounter] = useState(0);
  const [secondCounter, setSecondCounter] = useState(0);

  const increaseX = () => setState({ ...state, x: state.x + 1 });
  const increaseY = () => setState({ ...state, y: state.y + 1 });

  const increaseFirstCounter = () => setFirstCounter(firstCounter + 1);

  const increaseSecondCounter = () => setSecondCounter(secondCounter + 1);

  // const firstCounterComponent = useMemo(()=>
  // <Counter counter={firstCounter} index={1}/>,[firstCounter]);

  return (
    <div className="center">
      <h1>Counter</h1>
      <p>counter no. 1: {state.x}</p>
      <p>counter no. 2: {state.y}</p>
      {/* {firstCounterComponent} */}
      <Counter counter={state} index={1} />
      <Counter counter={state} index={2} />

      <button onClick={increaseX} className="btn_mar">
        add counter no.1{" "}
      </button>
      <button onClick={increaseY} className="btn_mar">
        add counter no.2{" "}
      </button>
    </div>
  );
};

export default App;
