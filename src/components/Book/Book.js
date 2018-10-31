import React from 'react';
import BookshelfChanger from '../BookshelfChanger/BookshelfChanger';
import PropTypes from 'prop-types';

const Book = (props) => {
  const {book, setNewShelf} = props;

  // If there's no imageLink, hide this style property
  const style = (book.imageLinks)
    ? ({width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail}`})
    : ({width: 128, height: 193});
  return (<div className="book">
    <div className="book-top">
      <div className="book-cover" style={style}></div>
      <div>
        <BookshelfChanger book={book} setNewShelf={setNewShelf}/>
      </div>
    </div>
    <div className="book-title">{book.title}</div>
    <div className="book-authors">
      {/* Render all authors, in case of no existing author render nothing */}
      {
        (book.authors)
          ? (book.authors.map((author, index) => <p key={index}>{author}</p>))
          : ""
      }</div>
  </div>);
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  setNewShelf: PropTypes.func.isRequired
}


export default Book;
