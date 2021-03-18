import React, { useState } from "react";

import Triangle from './Triangle';
import './style.css';

const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleOnClick = () => setIsVisible(prev => !prev);

  const triangleComponent = isVisible ? <Triangle /> : null;

  return (
    <div className="center">
      <button onClick={handleOnClick} className="btn_mar">Toggle</button>
      {triangleComponent}
    </div>
  );
};

export default App;
