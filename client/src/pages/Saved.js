import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid/index.js";
import Jumbotron from "../components/Jumbotron/index.js";
import SavedResult from "../components/SavedResult"
import Card from "../components/Card/index.js"

class Saved extends Component {
  
    state = {
        books: []
    }

  
  componentDidMount() {
    API.getBooks()
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
  }

  // get books from DB
   loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data })
      )
      .catch(err => console.log(err));
  };


  handleDeleteClick = id => {
    API.deleteBook(id)
      .then(res => 
          this.loadBooks())
      .catch( (err) => 
        console.log(err)
    );
  }

  render() {

    return(
        <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
            <h1>Books Saved To Read!</h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            {this.state.books.length ? (
              <Card heading="Saved Books">
                {this.state.books.map(book => (
                  <SavedResult
                    id={book._id}
                    key={book._id}
                    src={book 
                      ? book.src 
                      : null}
                    title={book.title}
                    authors={book.authors}
                    date={book.date}
                    description={book.description}
                    link={book.link}
                    handleDeleteClick={() => this.handleDeleteClick(book._id)}
                  />
                ))}
              </Card>
            ) : (
              <Card heading="Saved Books"></Card>
            )}
          </Col>
        </Row>
      </Container>

    );

  }
}

export default Saved;
