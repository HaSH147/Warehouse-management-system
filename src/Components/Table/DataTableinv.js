import React, { Component } from 'react'
import { Table, Button } from 'reactstrap';
import ModalForminv from '../Modals/ModalForminv';
import DataTablecss from './DataTable.css';

class DataTableinv extends Component {

  deleteItem = id => {
    let confirmDelete = window.confirm('Delete item forever?')
    if(confirmDelete){
      fetch('http://localhost:3000/inventaires', {
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
          <td>{item.date_deb}</td>
          <td>{item.date_fin}</td>
          <td>{item.typemvt}</td>
          <td>{item.qtemvt}</td>
          <td>{item.pumvt}</td>
          <td>
            <div style={{width:"70px"}}>
              <ModalForminv buttonLabel="Edit" item={item} updateState={this.props.updateState}/>
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
            <th>Id</th>
            <th>date_deb</th>
            <th>date_fin</th>
            <th>Type_mvt</th>
            <th>Qte_mvt</th>
            <th>PU_mvt</th>
          </tr>
        </thead>
        <tbody >
          {items}
        </tbody>
      </Table>
    )
  }
}

export default DataTableinv;