import React from "react";
import { useHistory } from "react-router-dom";
const ReactJS = () => {
  const history = useHistory();

  const handleOnClick = () => {
    const location = {
      pathname: "redux",
    };
    history.push(location)
  };
  return (
    <article>
      <h2>ReactJS</h2>
      <button onClick={handleOnClick} className="btn_mar">
        idz do Redux
      </button>
    </article>
  );
};

export default ReactJS;
