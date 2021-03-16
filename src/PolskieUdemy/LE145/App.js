import React, { createRef, useEffect, useRef, useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  const textInputRef = useRef(true);
  const numberInputRef = createRef(true);

  const focusOnInput = () => textInputRef.current.focus();
  const increaseCounter = () => setCounter(counter + 1);

//! tak nie wyjdzie
//   if(textInputRef){
//       textInputRef.current.focus();
//   }

//! focus na stacie w textInput
  useEffect(() => {
    textInputRef.current.focus();
  }, []);

  console.log(textInputRef.current);
  console.log(numberInputRef.current);

  return (
    <div className="center">
      <input ref={textInputRef} type="text" />
      <input ref={numberInputRef} type="number" />
      <button onClick={focusOnInput} className="btn_mar">
        set focus on input
      </button>
      <button className="btn_mar" onClick={increaseCounter}>
        przerenderuj component
      </button>
    </div>
  );
};

export default App;
