import React from "react";

const Counter = ({callback,index}) => {
    console.log(`render counter No.1: ${index}`);

  return <div>
      <button onClick={callback} className="btn_mar"> zwieksz licznik {index}</button>
  </div>;
};

export default React.memo(Counter);
// nie jest renderowany ponownie poprzez React.memo(Counter)