import React, { Component } from "react";
// STATE IMMUTABLE !!! - stan niezmienny
// shallow merge - Płytkie połączenie
// this.state({})

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      name: "john",
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  //   handleClick() {
  //     console.log("you clicked me");
  //     console.log(this.state.count);
  //   }

  // wersja z funkcja strzalkowa

  // handleClick = ()=> {
  //     console.log('you clicked me');
  //     console.log(this.state.count);
  // }
  addCount = () => {
    this.setState({
      count: this.state.count + 1,
      name: "peter",
    });
  };
  resetCount = () => {
      this.setState({
          count: 0
      })
  };
  lowerCount = () => {
    this.setState({
        count: this.state.count -1
    })
  };

  render() {
    // console.log(this.props);

    const { img, title, author } = this.props.info;
    return (
      <article className="book">
        <img src={img} width="150" alt="book" />
        <div>
          <h3>Titel : {title}</h3>
          <h3 className="author">Author : {author} </h3>
          <h3>count : {this.state.count}</h3>
          <h3>count : {this.state.name}</h3>
          <button type="button" className="btn" onClick={this.addCount}>
            add count
          </button>
          <button type="button" className="btn" onClick={this.resetCount}>
            reset
          </button>
          <button type="button" className="btn" onClick={this.lowerCount}>
            lower count
          </button>
        </div>
      </article>
    );
  }
}

export default Book;
