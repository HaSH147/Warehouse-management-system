import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class AddEditFormcom extends React.Component {
  state = {
    id: 0,
    idart: '',
    date_com: '',
    qte_com: '',
  }

  onChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitFormAdd = e => {
    e.preventDefault()
    fetch('http://localhost:3000/clients', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: this.state.id,
        idart: this.state.idart,
        date_com: this.state.date_com,
        qte_com: this.state.qte_com,
        designation: this.state.designation,
      })
    })
      .then(response => response.json())
      .then(item => {
        if(Array.isArray(item)) {
          this.props.addItemToState(item[0])
          this.props.toggle()
        } else {
          console.log('failure')
        }
      })
      .catch(err => console.log(err))
  }

  submitFormEdit = e => {
    e.preventDefault()
    fetch('http://localhost:3000/clients', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: this.state.id,
        idart: this.state.idart,
        date_com: this.state.date_com,
        qte_com: this.state.qte_com,
        designation: this.state.designation,
      })
    })
      .then(response => response.json())
      .then(item => {
        if(Array.isArray(item)) {
          // console.log(item[0])
          this.props.updateState(item[0])
          this.props.toggle()
        } else {
          console.log('failure')
        }
      })
      .catch(err => console.log(err))
  }

  componentDidMount(){
    // if item exists, populate the state with proper data
    if(this.props.item){
      const { id, idart, date_com, qte_com, designation  } = this.props.item
      this.setState({ id, idart, date_com, qte_com, designation })
    }
  }

  render() {
    return (
      <Form onSubmit={this.props.item ? this.submitFormEdit : this.submitFormAdd}>
        <FormGroup>
          <Label for="Id">Id</Label>
          <Input type="text" name="ID" id="id" onChange={this.onChange} value={this.state.id === null ? '' : this.state.id} />
        </FormGroup>
        <FormGroup>
          <Label for="idart">Id Article</Label>
          <Input type="text" name="idart" id="idart" onChange={this.onChange} value={this.state.idart === null ? '' : this.state.idart} />
        </FormGroup>
        <FormGroup>
          <Label for="qte_com">Qte_com</Label>
          <Input type="text" name="qte_com" id="qte_com" onChange={this.onChange} value={this.state.qte_com === null ? '' : this.state.qte_com}  />
        </FormGroup>
        <FormGroup>
          <Label for="date_com">Date_com</Label>
          <Input type="date_com" name="date_com" id="date_com" onChange={this.onChange} value={this.state.date_com === null ? '' : this.state.date_com}  />
        </FormGroup>
        <FormGroup>
          <Label for="designation">Designation</Label>
          <Input type="text" name="designation" id="designation" onChange={this.onChange} value={this.state.designation === null ? '' : this.state.designation}  />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}

export default AddEditFormcom;