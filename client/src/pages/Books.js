import React, { Component } from "react";
import API from "../utils/API";
import Search from "../components/Search/index.js"
import { Col, Row, Container } from "../components/Grid/index.js";
import Jumbotron from "../components/Jumbotron/index.js";
import Result from "../components/Result/index.js"
import Card from "../components/Card/index.js"

class Books extends Component {
  
  state = {
        bookInput: "",
        books: []
    };
  
  
  componentDidMount() {
    this.searchGoogle();
  };

  searchGoogle = query => {
    API.searchBooks(query)
      .then(res => this.setState({books:res.data}))
      .catch(err => console.log(err));
  };


  handleInputChange = event => {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

 
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchGoogle(this.state.bookInput);
  };

  handleSaveClick = bookData => {
    API.saveBook(bookData).then(
        (response) => {
            console.log(response);
        }
    ).catch(
        (err) => {
            console.log(err);
        }
    );
  }

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
            <h1>What Books Should I Read?</h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card heading="Google Books Search">
              <Search
                bookInput={this.state.bookInput}
                handleInputChange={this.handleInputChange} 
                handleFormSubmit={this.handleFormSubmit}
              />
            </Card>
          </Col>
        </Row>

        <Row>
          <Col size="md-12">
            {this.state.books.length ? (
              <Card heading="Results">
                {this.state.books.map(book => (
                  <Result
                    key={book.id}
                    src={book.volumeInfo.imageLinks 
                      ? book.volumeInfo.imageLinks.thumbnail
                      : null}
                    title={book.volumeInfo.title}
                    authors={book.volumeInfo.authors
                      ? book.volumeInfo.authors.join(", ")
                      : "N/A"}
                    date={book.volumeInfo.publishedDate}
                    description={book.volumeInfo.description}
                    link={book.volumeInfo.infoLink}
                    handleSaveClick ={() => this.handleSaveClick ({ 
                      title: book.volumeInfo.title,
                      src: book.volumeInfo.imageLinks 
                        ? book.volumeInfo.imageLinks.thumbnail 
                        : null,
                      authors: book.volumeInfo.authors,
                      date: book.volumeInfo.publishedDate,
                      description: book.volumeInfo.description,
                      link: book.volumeInfo.infoLink})}
                  />
                ))}
              </Card>
            ) : (
              <Card heading="Search Results"></Card>
            )}
          </Col>
        </Row>

      </Container>

    );
  }
};

export default Books;
