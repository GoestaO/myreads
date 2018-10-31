import React from 'react'
import * as BooksAPI from './BooksAPI';
import './App.css'
import Search from './components/Search/Search';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Bookshelf from './components/Bookshelf/Bookshelf';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    allBooks: [],
    showSearchPage: false
  }

  componentDidMount() {

    // Initial load of all books, update state
    BooksAPI
      .getAll()
      .then((allBooks) => this.setState({allBooks: allBooks}));
  }

  render() {
    return (<div className="app">
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <Bookshelf category="Currently Reading" books={this
                  .state
                  .allBooks
                  .filter((book) => book.shelf === 'currentlyReading')}/>
            </div>
            <div className="bookshelf">
              <Bookshelf category="Want to Read" books={this
                  .state
                  .allBooks
                  .filter((book) => book.shelf === 'wanttoRead')}/>
            </div>
            <div className="bookshelf">
              <Bookshelf category="Read" books={this
                  .state
                  .allBooks
                  .filter((book) => book.shelf === 'read')}/>
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link to="/search"/>
        </div>
      </div>
    </div>);
  }
}

export default BooksApp
