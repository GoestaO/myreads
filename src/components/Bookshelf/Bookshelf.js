import React from 'react';
import Book from '../Book/Book';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Bookshelf = (props) => {
  const {category, books, setNewShelf} = props;
  return (<div>
    <h2 className="bookshelf-title">{category}</h2>  
    <div className="bookshelf-books">
      <ol className="books-grid">
        {books.map((book) => (<li key={book.id}><Book setNewShelf={setNewShelf} book={book}/></li>))}
      </ol>
    </div>

  </div>);
}

export default Bookshelf;
