import React, { Component } from "react";
import Button from "./Buttons";

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      name: "john",
    };
  }

  render() {
    const { img, title, author } = this.props.info;
    const {handleDelete} = this.props
    return (
      <article className="book">
        <img src={img} width="150" alt="book" />
        <div>
          <h3>Titel : {title}</h3>
          <h3 className="author">Author : {author} </h3>
          
          <Button handleDelete={handleDelete} />
        </div>
      </article>
    );
  }
}

export default Book;
