import React from 'react';
import BookshelfChanger from '../BookshelfChanger/BookshelfChanger';

const Book = (props) => {
  const {book} = props;  
  return (<div className="book">
    <div className="book-top">
      <div className="book-cover" style={{
          width: 128,
          height: 193,
          backgroundImage: `url(${book.imageLinks.thumbnail}`
        }}></div>
      <div>
        <BookshelfChanger/>
      </div>
    </div>
    <div className="book-title">{book.title}</div>
    <div className="book-authors">{book.authors.map((author) => author + ", ")}</div>
  </div>);
}

export default Book;
