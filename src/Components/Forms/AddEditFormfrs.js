import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class AddEditFormfrs extends React.Component {
  state = {
    id: 0,
    name: '',
    adressefrs: '',
    webfrs: '',
    email: '',
    telfrs: '',
  }

  onChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitFormAdd = e => {
    e.preventDefault()
    fetch('http://localhost:3000/fournisseurs', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name,
        adressefrs: this.state.adressefrs,
        email: this.state.email,
        webfrs: this.state.Web,
        telfrs: this.state.telfrs,
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
    fetch('http://localhost:3000/fournisseurs', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: this.state.id,
        name: this.state.name,
        adressfrs: this.state.adressefrs,
        email: this.state.email,
        webfrs: this.state.webfrs,
        telfrs: this.state.telfrs,
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
      const { id, name, adressefrs, email, webfrs, telfrs } = this.props.item
      this.setState({ id, name, adressefrs, email, webfrs, telfrs })
    }
  }

  render() {
    return (
      <Form onSubmit={this.props.item ? this.submitFormEdit : this.submitFormAdd}>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input type="text" name="name" id="name" onChange={this.onChange} value={this.state.name === null ? '' : this.state.name} />
        </FormGroup>
        <FormGroup>
          <Label for="Adress">Adress</Label>
          <Input type="text" name="adressefrs" id="adressefrs" onChange={this.onChange} value={this.state.adressefrs === null ? '' : this.state.adressefrs}  />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" id="email" onChange={this.onChange} value={this.state.email === null ? '' : this.state.email}  />
        </FormGroup>
         <FormGroup>
          <Label for="Web">Website</Label>
          <Input type="text" name="webfrs" id="webfrs" onChange={this.onChange} value={this.state.webfrs === null ? '' : this.state.webfrs}  />
        </FormGroup>
        <FormGroup>
          <Label for="phone">Phone</Label>
          <Input type="text" name="telfrs" id="telfrs" onChange={this.onChange} value={this.state.telfrs === null ? '' : this.state.telfrs}  placeholder="ex. 555-555-5555" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}

export default AddEditFormfrs;