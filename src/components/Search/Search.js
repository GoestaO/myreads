import React from 'react';
import {Link} from 'react-router-dom';
import * as BooksAPI from '../../BooksAPI';
import Book from '../Book/Book';
import PropTypes from 'prop-types';

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // Raw book infos only!
      rawSearchResult: []
    }

  }

  handleChange = (event) => {
    let searchText = event.target.value;
    // Clear the searchResult first
    this.setState({rawSearchResult: []});
    // Fetching books based on the search query
    if (searchText !== '') {

      BooksAPI
        .search(searchText)
        .then((result) => {
          if (result.length > 0) {
            this.setState({rawSearchResult: result})
          }
        });

    } else {
      //Clear the searchResult again, just to be safe.
      this.setState({rawSearchResult: []});
    }

  }

  getBookFromShelf = (book) => {
    const booksOnShelves = this.props.booksOnShelves;
    let bookOnShelf = booksOnShelves.filter((b) => b.id === book.id);
    if (bookOnShelf.length > 0) {
      return bookOnShelf[0];
    }
    return book;
  }

  render() {
    return (<div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search"/>
        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title or author..." onInput={this.handleChange}/>
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {
            (this.state.rawSearchResult)
              ? (this.state.rawSearchResult.map((book) => (<li key={book.id}><Book book={this.getBookFromShelf(book)} setNewShelf={this.props.setNewShelf}/></li>)))
              : ""
          }
        </ol>
      </div>
    </div>);
  }
}
Search.propTypes = {
  booksOnShelves: PropTypes.array.isRequired,
  setNewShelf: PropTypes.func.isRequired
}

export default Search;
