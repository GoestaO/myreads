import React from 'react'
import * as BooksAPI from './BooksAPI';
import './App.css'
import Search from './components/Search/Search';
import {Route, Link} from "react-router-dom";
import Bookshelf from './components/Bookshelf/Bookshelf';

class BooksApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      booksOnShelves: []
    }
  }

  componentDidMount() {
    // Initial load of all books, update state with the result
    BooksAPI
      .getAll()
      .then((booksOnShelves) => this.setState({booksOnShelves: booksOnShelves}));
  }

  setNewShelf = (book, newShelf) => {
    BooksAPI
      .update(book, newShelf)
      .then(() => BooksAPI.getAll().then((booksOnShelves) => this.setState({booksOnShelves: booksOnShelves})));
  }

  render() {
    return (<div>
      <Route exact path="/" render={() => (<div className="app">
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <Bookshelf setNewShelf={this.setNewShelf} category="Currently Reading" books={this
                      .state
                      .booksOnShelves
                      .filter((book) => book.shelf === 'currentlyReading')}/>
                </div>
                <div className="bookshelf">
                  <Bookshelf setNewShelf={this.setNewShelf} category="Want to Read" books={this
                      .state
                      .booksOnShelves
                      .filter((book) => book.shelf === 'wantToRead')}/>
                </div>
                <div className="bookshelf">
                  <Bookshelf setNewShelf={this.setNewShelf} category="Read" books={this
                      .state
                      .booksOnShelves
                      .filter((book) => book.shelf === 'read')}/>
                </div>
              </div>
            </div>
            <div className="open-search">
              <Link to="/search"/>
            </div>
          </div>
        </div>)}></Route>

      <Route exact path="/search" component={(props) => <Search {...props} setNewShelf={this.setNewShelf} booksOnShelves={this.state.booksOnShelves}/>}></Route>
    </div>)
  }
}

export default BooksApp
