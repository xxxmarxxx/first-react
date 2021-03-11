import React, { useEffect, useState } from "react";


// useState and useEffect

const App = () => {
  const [counter, setCounter] = useState(0);
  const [isActive, setIsActive] = useState(true);

  const handler = () => setCounter(counter + 1);
  const toggleVisibilityCounter = () => setIsActive((prevValue) => !prevValue);

  const counterComponent = isActive ? (
    <Counter rerenderCounter={counter} />
  ) : null;
  //   useEffect(() => {
  //       alert('Hello')
  //   }, []);

  return (
    <div style={{ cursor: "pointer", textAlign: "center", margin: "100px" }}>
      <hr style={{ margin: "10px" }}></hr>

      <button className="btn" onClick={toggleVisibilityCounter}>
        on/off component
      </button>
      <button className="btn_mar" onClick={handler}>
        przerenderuj component
      </button>
      <div style={{ margin: "20px", backgroundColor: "red", color: "white" }}>
        {counterComponent}
      </div>
      <hr style={{ margin: "10px" }}></hr>
    </div>
  );
};

const Counter = ({ rerenderCounter }) => {
  const [counter, setCounter] = useState(0);
  const handleMouseMove = (event) => setCounter(event.clientX);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      alert("component unmounted ");
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [rerenderCounter]);

  return (
    <div>
      <p>{counter}</p>
      <p>{rerenderCounter}</p>
    </div>
  );
};

export default App;
