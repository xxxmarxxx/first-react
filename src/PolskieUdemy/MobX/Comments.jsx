// import React from "react";
import {observer} from 'mobx-react'

import {useCommentsStore} from './stores/hooks'

const Comments = () => {
    const {comments, removeComment} = useCommentsStore()

    const handleClick = (e)=> {
        const id = Number(e.target.dataset.id)

removeComment(id);
    }

  const commentsElements = comments.map((comment) => (
    <li key={comment.id}>
      <p>{comment.comment}</p>
      <button 
      className='btn_mar'
      data-id={comment.id}
      onClick={handleClick}>
          delete comment
      </button>
    </li>
  ));

  return <ul>{commentsElements}</ul>;
};

export default observer(Comments);
