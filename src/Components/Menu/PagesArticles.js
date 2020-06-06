import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ModalFormart from '../Modals/ModalArt';
import DataTable from '../Table/DataTableart';
import { CSVLink } from "react-csv";
import PageArticlescss from './PageClients.css';

class PageArticles extends Component {
  state = {
    items: []
  }

  getItems(){
    fetch('http://localhost:3000/articles')
      .then(response => response.json())
      .then(items => this.setState({items}))
      .catch(err => console.log(err))
  }

  addItemToState = (item) => {
    this.setState(prevState => ({
      items: [...prevState.items, item]
    }))
  }

  updateState = (item) => {
    const itemIndex = this.state.items.findIndex(data => data.id === item.id)
    const newArray = [
    // destructure all items from beginning to the indexed item
      ...this.state.items.slice(0, itemIndex),
    // add the updated item to the array
      item,
    // add the rest of the items to the array from the index after the replaced item
      ...this.state.items.slice(itemIndex + 1)
    ]
    this.setState({ items: newArray })
  }

  deleteItemFromState = (id) => {
    const updatedItems = this.state.items.filter(item => item.id !== id)
    this.setState({ items: updatedItems })
  }

  componentDidMount(){
    this.getItems()
  }

  render() {
    return (
      <Container className="App Hey">
        <Row>
          <Col>
            <h1 style={{margin: "20px 0"}}>Articles Table</h1>
            <br />
          </Col>
        </Row>
        <Row>
          <Col>
            <DataTable items={this.state.items} updateState={this.updateState} deleteItemFromState={this.deleteItemFromState} />
          </Col>
        </Row>
        <Row style={{float: "right"}}>
          <Col >
            <ModalFormart buttonLabel="Add Item" addItemToState={this.addItemToState}/>
            <CSVLink
              filename={"db.csv"}
              color="primary"
              style={{float: "right", marginRight: "0px"}}
              className="btn btn-primary"
              data={this.state.items}>
              Download CSV
            </CSVLink>
          </Col>
        </Row>
      </Container>
    )
  }
}


export default PageArticles;