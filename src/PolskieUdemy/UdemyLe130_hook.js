import React from 'react'

const Udemy = () => {
    const [counter, setCounter]  = React.useState(0)
  return (
    <div>
      <h1>Prezentacja stanu w React</h1>
      <p>Wartosc stanu : {counter}</p>
    </div>
  );
};

export default Udemy;
