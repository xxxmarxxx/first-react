import React, { useState } from "react";

const Form = ({ addHandler }) => {
  const [inputData, setInputData] = useState("");

  const handleOnChange = (e) => setInputData(e.target.value);
  const handleOnClick = () => {
    const newCourse = {
      id: Math.floor(Math.random() * 1000),
      title: inputData,
    };

    addHandler({ type: "ADD", newCourse });
    setInputData("");
  };

  return (
    <div className="center">
      <input type="text" onChange={handleOnChange} value={inputData} />
      <button onClick={handleOnClick} className="btn_mar">
        dodaj kurs
      </button>
    </div>
  );
};

export default Form;
