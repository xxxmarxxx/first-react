import React, { Component } from "react";

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      name: "john",
      showInfo: false,
    };
  }

  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    });
  };

  render() {
    const { id, img, title, author } = this.props.info;

    const checkInfo = (info) => {
      if (info === true) {
        return (
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequatur repellat{" "}
          </p>
        );
      } else {
        return null;
      }
    };

    return (
      <article className="book">
        <img src={img} width="150" alt="book" />
        <div>
          <h4>Titel : {title}</h4>
          <h6 className="author">Author : {author} </h6>

          <button type="button" className="btn" onClick={this.handleInfo}>
            toggle info
          </button>
          {checkInfo(this.state.showInfo)}

          {/* ternary operator */}
          {/* {this.state.showInfo? <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p> : null} */}
          {/* and */}
          {/* {this.state.showInfo && (
            <p style={{ width: "700px" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Non perspiciatis laboriosam nemo sed eius odio eaque recusandae
              corrupti aliquid pariatur aperiam consequatur, voluptatum
              delectus, esse eos molestias perferendis quibusdam mollitia?
            </p>
          )} */}
        </div>
      </article>
    );
  }
}

export default Book;
