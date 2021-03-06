import React from 'react';

const BookshelfChanger = (props) => {
  return (<div className="book-shelf-changer">
    <select>
      <option value="move" disabled="disabled">Move to...</option>
      <option value="currentlyReading">Currently Reading</option>
      <option value="wantToRead">Want to Read</option>
      <option value="read">Read</option>
      <option value="none">None</option>
    </select>
  </div>);
}

export default BookshelfChanger;
