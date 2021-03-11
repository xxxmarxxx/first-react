import React, { useEffect, useState } from "react";
import "../index.css";

// useState and useEffect

const App = () => {
  const [counter, setCounter] = useState(0);
  const [isActive, setIsActive] = useState(true);

  const handler = () => setCounter(counter + 1);
  const toggleVisibilityCounter = () => setIsActive((prevValue) => !prevValue);

  //   useEffect(() => {
  //       alert('Hello')
  //   }, []);

  return (
    <div style={{ cursor: "pointer", textAlign: "center", margin: "100px" }}>
      <hr style={{ margin: "10px" }}></hr>

      <button className="btn" onClick={toggleVisibilityCounter}>
        on/off component
      </button>
      <div style={{margin:'20px', backgroundColor:'red', color:'white'}}>{isActive && <Counter/>}</div>
      <hr style={{ margin: "10px" }}></hr>
    </div>
  );
};

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const handleMouseMove = (event) => setCounter(event.clientX);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div>
      <p>{counter}</p>
      {/* <p>{rerenderCounter}</p> */}
    </div>
  );
};

export default App;
