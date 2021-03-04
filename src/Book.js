import React, { Component } from "react";

class Book extends Component {
  render() {
    // console.log(this.props);
    const { book, author } = this.props.info;
    return (
      <article>
        <h3>book : {book}</h3>
        <h3 className="author">author : {author} </h3>
      </article>
    );
  }
}

export default Book;
