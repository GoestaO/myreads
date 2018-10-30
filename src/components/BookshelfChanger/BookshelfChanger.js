import React from 'react';

class BookshelfChanger extends React.Component {

  state = {
    shelf: ""
  }

  componentDidMount() {
    const book = this.props.book;
    this.setState({shelf: book.shelf});
  }

  handleChange = (event) => {
    const newShelf = event.target.value;
    this
      .props
      .setNewShelf(this.props.book, newShelf);

  }

  render() {
    return (<div className="book-shelf-changer">
      <form>
        <select defaultValue={this.props.book.shelf} onChange={this.handleChange}>
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
export default BookshelfChanger;
