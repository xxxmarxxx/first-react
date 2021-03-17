import React from "react";

const Counter = ({index}) => {
    console.log(`render counter No.1: ${index}`);

  return <div>
      <p>Counter No.{index} is:</p>
  </div>;
};

export default Counter;
// nie jest renderowany ponownie poprzez React.memo(Counter)