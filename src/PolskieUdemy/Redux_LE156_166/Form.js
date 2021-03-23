import React, { useState } from "react";

const Form = ({ author = "", comment = "", callback, id, rate = 0 }) => {
  const [authorInput, setAuthorInput] = useState(author);
  const [rateInput, setRateInput] = useState(rate);
  const [commentInput, setCommentInput] = useState(comment);

  const handleChangeAuthor = (event) => setAuthorInput(event.target.value);

  const handleChangeRate = (event) => setRateInput(event.target.value);

  const handleCommentChange = (event) => setCommentInput(event.target.value);

  const handleOnSubmit = event =>{
      event.preventDefault()
      if(!authorInput.length){
          return;
      }
      const rateObject = {
         author: authorInput,
         comment: commentInput,
         id,
         rate: Number(rateInput), 
      }
      console.log(rateObject);
      id ? console.log('edycja oceny'): console.log('dodaj ocene');

      if(id){
            callback()
      }
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <div>
        <label>
          Author:
          <input onChange={handleChangeAuthor} type="text" value={authorInput} />
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
          <input onChange={handleCommentChange} type="text" value={commentInput} />
        </label>
      </div>
      <button type="submit" className="btn_mar">{id ? "edycja oceny" : "dodaj ocene"}</button>
    </form>
  );
};

export default Form;
