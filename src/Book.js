import React, { Component } from "react";

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      name: "john",
    };
  }

  render() {
    const { id, img, title, author } = this.props.info;
    const { handleDelete } = this.props;
    
    return (
      <article className="book">
        <img src={img} width="150" alt="book" />
        <div>
          <h4>Titel : {title}</h4>
          <h6 className="author">Author : {author} </h6>

          <button type="button" className="btn" onClick={()=>handleDelete(id)}>
            delete me
          </button>
        </div>
      </article>
    );
  }
}

export default Book;
