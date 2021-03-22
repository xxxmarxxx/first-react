import React from "react";
import { useHistory, useLocation } from "react-router-dom";

const Redux = () => {
  const history = useHistory();
  const location = useLocation();

  const handleOnClick = () => history.goBack();

  console.log(history);

  const isActive = Boolean(location.state && location.state.isActive);
  return (
    <article>
      <h2>Redux</h2>
      <p>Przeslana informacja isActive: {String(isActive)}</p>
      <button onClick={handleOnClick} className="btn_mar">
        wroc do poprzedniej strony
      </button>
    </article>
  );
};

export default Redux;
