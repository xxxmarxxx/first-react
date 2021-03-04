import React, { Component } from "react";

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
    // this.handleClick = this.handleClick.bind(this);
  }

    //   handleClick() {
    //     console.log("you clicked me");
    //     console.log(this.state.count);
    //   }

    // wersja z funkcja strzalkowa
handleClick = ()=> {
    console.log('you clicked me');
    console.log(this.state.count);
}

  render() {
    // console.log(this.props);

    const { img, title, author } = this.props.info;
    return (
      <article className="book">
        <img src={img} width="150" alt="book" />
        <div>
          <h3>Titel : {title}</h3>
          <h3 className="author">Author : {author} </h3>
          <button type="button" onClick={this.handleClick}>
            add count
          </button>
        </div>
      </article>
    );
  }
}

export default Book;
