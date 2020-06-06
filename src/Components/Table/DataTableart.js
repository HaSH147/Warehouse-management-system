import React, { Component } from 'react'
import { Table, Button } from 'reactstrap';
import ModalFormart from '../Modals/ModalArt';
import DataTableartcss from './DataTable.css' ;

class DataTableart extends Component {

  deleteItem = idart => {
    let confirmDelete = window.confirm('Delete item forever?')
    if(confirmDelete){
      fetch('http://localhost:3000/articles', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        idart
      })
    })
      .then(response => response.json())
      .then(item => {
        this.props.deleteItemFromState(idart)
      })
      .catch(err => console.log(err))
    }

  }

  render() {

    const items = this.props.items.map(item => {
      return (
        <tr className="width" key={item.idart}>
          <th scope="row">{item.idart}</th>
          <td>{item.qteinit}</td>
          <td>{item.qtestock}</td>
          <td>{item.pu}</td>
          <td>{item.categorie}</td>
          <td>{item.designation}</td>
          <td>{item.qtealerte}</td>
          <td>{item.qtemin}</td>
          <td>
            <div style={{width:"70px"}}>
              <ModalFormart buttonLabel="Edit" item={item} updateState={this.props.updateState}/>
              {' '}
              <Button color="danger" onClick={() => this.deleteItem(item.id)}>Del</Button>
            </div>
          </td>
        </tr>
        )
      })

    return (

      <Table  className="width" responsive hover>
        <thead >
          <tr>
            <th>IdArt</th>
            <th>QteInit</th>
            <th>QteStock</th>
            <th>PU</th>
            <th>Categorie</th>
            <th>Designation</th>
            <th>QteAlerte</th>
            <th>QteMin</th>
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

export default DataTableart;