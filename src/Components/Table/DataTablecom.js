import React, { Component } from 'react'
import { Table, Button } from 'reactstrap';
import ModalFormcom from '../Modals/ModalFormcom';
import DataTablecss from './DataTable.css';

class DataTablecom extends Component {

  deleteItem = id => {
    let confirmDelete = window.confirm('Delete item forever?')
    if(confirmDelete){
      fetch('http://localhost:3000/commandes', {
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
        <tr  className="width" key={item.id}>
          <th   scope="row">{item.id}</th>
          <td>{item.idart}</td>
          <td>{item.date_com}</td>
          <td>{item.qte_com}</td>
          <td>{item.designation}</td>
          <td>
            <div style={{width:"70px"}}>
              <ModalFormcom buttonLabel="Edit" item={item} updateState={this.props.updateState}/>
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
            <th>Id_Art </th>
            <th>Date_cmde</th>
            <th>Qte_Cmde</th>
            <th>Designation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody >
          {items}
        </tbody>
      </Table>
    )
  }
}

export default DataTablecom; 