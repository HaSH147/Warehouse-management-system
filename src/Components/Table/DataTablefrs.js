import React, { Component } from 'react'
import { Table, Button } from 'reactstrap';
import ModalFormfrs from '../Modals/ModalFrs';
import DataTablecss from './DataTable.css';
class DataTablefrs extends Component {

  deleteItem = id => {
    let confirmDelete = window.confirm('Delete item forever?')
    if(confirmDelete){
      fetch('http://localhost:3000/fournisseurs', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id
      })
    })
      .then(response => response.json())
      .then(item => {
        this.props.deleteItemFromState(id)
      })
      .catch(err => console.log(err))
    }

  }

  render() {

    const items = this.props.items.map(item => {
      return (
        //key={item.idfrs}
        <tr className="width" 
            size="sm" 
            style={{ width: '10vw' }}
            key={item.id} 
        >
          <th scope="row">{item.id}</th>
          <td>{item.name}</td>
          <td>{item.adressefrs}</td>
          <td>{item.webfrs}</td>
          <td>{item.email}</td>
          <td>{item.telfrs}</td>
          <td>
            <div style={{width:"70px"}}>
              <ModalFormfrs buttonLabel="Edit" item={item} updateState={this.props.updateState}/>
              {' '}
              <Button color="danger" onClick={() => this.deleteItem(item.id)}>Del</Button>
            </div>
          </td>
        </tr>
        )
      })

    return (
      <Table className="width" responsive hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Adress</th>
            <th>Email</th>
            <th>WebSite</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items}
        </tbody>
      </Table>
    )
  }
}

export default DataTablefrs;
