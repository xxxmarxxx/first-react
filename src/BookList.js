import React, { Component } from "react";
import Book from "./Book";
import BookData from "./BookData";
class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: BookData,
    };
  }
  //   state = {

  //   };
  // this.setState({})

  handleDelete = () => {
    console.log(`I'm from parent component`);
  };

  render() {
    // const books = this.state.books.map((item) => item.book);
    // console.log(books);
    // filter
    // forEach
    // map
    // reduce
    return (
      <section>
        <h3>This is our BookList</h3>
        {this.state.books.map((item) => (
          <Book key={item.id} info={item} handleDelete={this.handleDelete}></Book>
        ))}
      </section>
    );
  }
}

export default BookList;
