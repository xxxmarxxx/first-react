import React, { useState } from "react";

import { useCommentsStore } from "./stores/hooks";

const Form = () => {
  const [inputData, setInputData] = useState("");
  const { addComment } = useCommentsStore();

  const handleOnChange = (e) => setInputData(e.target.value);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const comment = {
      id: Date.now(),
      comment: inputData,
    };
    addComment(comment);
    setInputData("");
  };

  return (
    <form>
      <label onSubmit={handleOnSubmit}>
        Wpisz komentarz
        <input onChange={handleOnChange} type="text" value={inputData} />
      </label>
    </form>
  );
};

export default Form;
