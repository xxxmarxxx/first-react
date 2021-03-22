import React, { useState } from "react";
import { useHistory } from "react-router-dom";
const Mobx = () => {
  const [inputData, setInputData] = useState("");
  const history = useHistory();

  const handleOnChange = (e) => setInputData(e.target.value);

  const handleOnClick = () => {
    const location = {
      pathname: `/typescript/${inputData}`,
    };
    history.push(location);
  };
  return (
    <article>
      <h2>Mobx</h2>
      <input onChange={handleOnChange} type="text" value={inputData} />
      <button onClick={handleOnClick} className="btn_mar">
        wyslij params do TypeScript
      </button>
    </article>
  );
};

export default Mobx;
