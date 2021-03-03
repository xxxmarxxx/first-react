import React, { Component } from "react";
import Book from "./Book";
class BookList extends Component {

books = [
    {
        book:'book number one',
        author:'john doe'
    },
    {
        book:'book number two',
        author:'bobby doe'
    },
]

  render() {
    return (
      <section>
        <h3>This is our BookList</h3>
        <Book book={this.books[0]}/>
      </section>
    );
  }
}

export default BookList;
