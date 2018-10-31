import React from 'react';
import PropTypes from 'prop-types';

class BookshelfChanger extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      book: ''
    }
  }

  componentWillMount() {
    let book = this.props.book;
    if (book && !book.shelf) {
      book.shelf = 'None';
    }
    this.setState({book: book});
  }

  handleChange = (event) => {
    event.preventDefault();
    const newShelf = event.target.value;
    let book = this.state.book;
    this
      .props
      .setNewShelf(book, newShelf);

  }

  render() {
    return (<div className="book-shelf-changer">
      <form>
        <select defaultValue={(
            this.state.book.shelf !== "None")
            ? (this.state.book.shelf)
            : "none"} onChange={this.handleChange}>
          <option value="move" disabled="disabled">Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </form>
    </div>);
  }
}
BookshelfChanger.propTypes = {
  book: PropTypes.object.isRequired,
  setNewShelf: PropTypes.func.isRequired
}

export default BookshelfChanger;
