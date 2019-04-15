import React, { Component } from "react";
import API from "../utils/API";
import Search from "../components/Search/index.js"
import Container from "../components/Container/index.js"

class Books extends Component {
  
  state = {
    books: [],
    bookInput: ""
  };


  searchGoogle = query => {
    API.searchBooks(query)
      .then(res => this.setState({ books:res.data}))
      .catch(err => console.log(err));
  };


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

 
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchGoogle(this.state.bookInput);
  };

  render() {
    return (
        <div>
          <Search handleInputChange={this.handleInputChange} handleFormSubmit={this.handleFormSubmit} />
            {(this.state.books.length > 0)?
              <Container books={this.state.books} path={this.props.match.path}/> : null
            }
        </div>
    );
  }
}

export default Books;
