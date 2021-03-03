import React, { Component } from 'react';

class Book extends Component {
    render() {
        console.log(this.props);
        return (
            <article>
                <h3>book :</h3>
                <h3>author :</h3>
            </article>
        );
    }
}

export default Book;
