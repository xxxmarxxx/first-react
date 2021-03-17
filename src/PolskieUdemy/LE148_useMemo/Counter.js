import React from "react";

const Counter = ({counter,index}) => {
    console.log(`render counter No.1: ${index}`);

  return <div>
      <p>Counter No.{index} is: {counter.x}</p>
  </div>;
};

export default React.memo(Counter);
// nie jest renderowany ponownie poprzez React.memo(Counter)