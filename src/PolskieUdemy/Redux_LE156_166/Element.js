import React, { useState } from "react";
import Form from './Form';

const Element = ({ author, comment, id, rate }) => {
  const [isVisibleForm, setIsVisibleForm] = useState(false);
  const toggleElements = () => setIsVisibleForm((prev) => !prev);

  const formOrButtonElement = isVisibleForm ? (
    <Form
      author={author}
      callback={toggleElements}
      comment={comment}
      id={id}
      rate={rate}
    />
  ) : (
    <button onClick={toggleElements} className="btn_mar">
      Edytuj ksiazke
    </button>
  );

  return (
    <li>
      <p>Author oceny: {author}</p>
      <p>Ocena: {rate}</p>
      <p>Komentarz: {comment}</p>
      {formOrButtonElement}
    </li>
  );
};

export default Element;
