import React, { Component } from "react";
import './style.css';

class Flexbox extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="container">
          <div className="item">Flex item 1</div>
          <div className="item">Flex item 2</div>
          <div className="item">Flex item 3</div>
          <div className="item">Flex item 4</div>
          <div className="item big">Flex item 5</div>
          
        </div>
      </>
    );
  }
}

export default Flexbox;
