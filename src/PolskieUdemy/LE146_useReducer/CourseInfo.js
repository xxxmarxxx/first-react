import React from "react";

const CourseInfo = ({ id, onClickHandler, title }) => {
  const handleOnClick = () => onClickHandler({
      id,
      type: 'REMOVE',
  });

  return (
    <div className="center">
      <p>{title}</p>
      <button className="btn_mar" onClick={handleOnClick}>delete course</button>
    </div>
  );
};

export default CourseInfo;
