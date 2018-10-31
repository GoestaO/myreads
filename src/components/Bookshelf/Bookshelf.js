import React from 'react';
import Book from '../Book/Book';
import BookshelfChanger from '../BookshelfChanger/BookshelfChanger';

const Bookshelf = (props) => {
  const {category, books} = props;
  return (<div>
    <h2 className="bookshelf-title">{category}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {books.map((book, index) => (<li key={index}><Book book={book}/></li>))}
      </ol>
    </div>
  </div>);
}

export default Bookshelf;
