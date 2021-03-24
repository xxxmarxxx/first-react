import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addRate, editRate } from "./Actions/appActions";

const Form = ({ author = "", comment = "", callback, id, rate = 0 }) => {

  const [authorInput, setAuthorInput] = useState(author);
  const [rateInput, setRateInput] = useState(rate);
  const [commentInput, setCommentInput] = useState(comment);

  const dispatch = useDispatch();

  const handleChangeAuthor = (e) => setAuthorInput(e.target.value);

  const handleChangeRate = (e) => setRateInput(e.target.value);

  const handleCommentChange = (e) => setCommentInput(e.target.value);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    // if(!authorInput.length){
    //     return;
    // }
    const rateObject = {
      author: authorInput,
      comment: commentInput,
      id,
      rate: Number(rateInput),
    };
    //   console.log(rateObject);
    id ? dispatch(editRate(rateObject)) : dispatch(addRate(rateObject));

    if (id) {
      callback();
    }
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <div className="box">
      <div>
        <label>
          Author: 
          <input
            onChange={handleChangeAuthor}
            type="text"
            value={authorInput}
          />
        </label>
      </div>
      <div>
        <label>
          ocena:
          <input onChange={handleChangeRate} type="number" value={rateInput} />
        </label>
      </div>
      <div>
        <label>
          Komentarz:
          <input
            onChange={handleCommentChange}
            type="text"
            value={commentInput}
          />
        </label>
      </div>
      </div>
      <button type="submit" className="btn_mar">
        {id ? "edycja oceny" : "dodaj ocene"}
      </button>
    </form>
  );
};

export default Form;
