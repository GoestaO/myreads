import React from 'react';
import Book from '../Book/Book';
import BookshelfChanger from '../BookshelfChanger/BookshelfChanger';

const Bookshelf = (props) => {
  const {category, books} = props;
  return (<div>
    <h2 className="bookshelf-title">{category}</h2>
    <div className="bookshelf-books">

      <ol className="books-grid">
        <li>
          <Book title="To Kill a Mockingbird" author="Harper Lee"/>
        </li>
        <li>
          <Book title="Some random title" author="Random author"/>
        </li>
        <li>
          <Book title="Yet another random title" author="Another random author"/>
        </li>
      </ol>
    </div>
  </div>);
}

export default Bookshelf;
