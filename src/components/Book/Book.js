import React from 'react';
import BookshelfChanger from '../BookshelfChanger/BookshelfChanger';

const Book = (props) => {
  const {book, setNewShelf} = props;
  return (<div className="book">
    <div className="book-top">
      <div className="book-cover" style={{
          width: 128,
          height: 193,
          backgroundImage: `url(${book.imageLinks.thumbnail}`
        }}></div>
      <div>
        <BookshelfChanger book={book} setNewShelf={props.setNewShelf}/>
      </div>
    </div>
    <div className="book-title">{book.title}</div>
    <div className="book-authors">
      {
        (book.authors)
          ? (book.authors.map((author) => author + " "))
          : " "
      }</div>
  </div>);
}

export default Book;
