import React, { useEffect, useLayoutEffect } from "react";
import "./style.css";
const Triangle = () => {

  //! z useEffect pojawia sie trojkat z lewej strony!
  useLayoutEffect(() => {
    const element = document.querySelector(".triangle");

    element.style.top = "50%";
    element.style.left = "50%";
    element.style.transform = `translate(-50%, -50%) rotate(90deg)`;
  }, []);

  return <div className="triangle"/>;
};

export default Triangle;
