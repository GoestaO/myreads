import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import * as BooksAPI from '../../BooksAPI';
import Book from '../Book/Book';

class Search extends React.Component {

  state = {
    searchQuery: [],
    searchResult: []
  }

  handleChange = (event) => {
    let searchText = event.target.value;
    if (searchText !== '') {
      BooksAPI
        .search(searchText)
        .then((result) => this.setState({searchResult: result}));
    }
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
            this
              .state
              .searchResult
              .map((book) => (<li key={book.id}><Book book={book}/></li>))
          }
        </ol>
      </div>
    </div>);
  }
}

export default Search;
