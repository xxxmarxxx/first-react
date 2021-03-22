import React from "react";
import { useHistory } from "react-router-dom";

const Redux = () => {
  const history = useHistory();

  const handleOnClick = () => history.goBack();
  console.log(history);
  return (
    <article>
      <h2>Redux</h2>
      <button onClick={handleOnClick} className="btn_mar">
        wroc do poprzedniej strony
      </button>
    </article>
  );
};

export default Redux;
