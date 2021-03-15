import React, { Component } from "react";
import "./style.css";
class Block extends Component {
  state = {};
  render() {
    return (
      <div className="content">
        <h1 className="title">Block, inline and inline-block</h1>
        <div>
          <p className="p_text">
            Lorem ipsum, dolor sit
            <a href="/"> amet consectetur adipisicing elit. </a>
            Repellendus magni vel nostrum, quibusdam pariatur non ipsum nemo
            perferendis. Eaque asperiores harum illo velit, delectus sed magni
            ipsam provident eos iure!
          </p>
          <p className="p_text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <a href="/"> amet consectetur adipisicing elit. </a>
            Quae eos maxime eius molestiae. Porro dolor amet dolore eius,
            debitis laborum iste sapiente recusandae quod vero reprehenderit
            voluptatem esse illo! Natus.
          </p>
          <p className="p_text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. amet
            consectetur adipisicing elit. Unde, modi veritatis, temporibus
            aperiam, obcaecati quia molestiae dicta iure molestias aut numquam
            maiores officiis perspiciatis. Adipisci modi consequuntur commodi
            voluptatum provident.
          </p>
          <a href="/"
          className="btn_a">
              I'm a link/button</a>
          <a href="/"
          className="btn_a">
              One more</a>
        </div>
      </div>
    );
  }
}

export default Block;
