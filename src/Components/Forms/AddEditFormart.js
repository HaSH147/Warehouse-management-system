import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class AddEditFormart extends React.Component {
  state = {
    idart: 0,
    qteinit: 0,
    qtestock: 0,
    categorie: '',
    designation: '',
    qtealerte: 0,
    qtemin: 0,
  }

  onChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitFormAdd = e => {
    e.preventDefault()
    fetch('http://localhost:3000/articles', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        idart: this.state.idart,
        qteinit: this.state.qteinit,
        qtestock: this.state.qtestock,
        categorie: this.state.categorie,
        designation: this.state.designation,
        qtealerte: this.state.qtealerte,
        qtemin: this.state.qtemin,
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
    fetch('http://localhost:3000/articles', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        idart: this.state.idart,
        qteinit: this.state.qteinit,
        qtestock: this.state.qtestock,
        categorie: this.state.categorie,
        designation: this.state.designation,
        qtealerte: this.state.qtealerte,
        qtemin: this.state.qtemin,
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
      const { idart , qteinit, qtestock, pu, categorie, designation, qtealerte, qtemin } = this.props.item
      this.setState({ idart , qteinit, qtestock, pu, categorie, designation, qtealerte, qtemin })
    }
  }

  render() {
    return (
      <Form onSubmit={this.props.item ? this.submitFormEdit : this.submitFormAdd}>
        <FormGroup>
          <Label for="idart">IdArt</Label>
          <Input type="text" name="idart" id="idart" onChange={this.onChange} value={this.state.idart === null ? '' : this.state.idart} />
        </FormGroup>
        <FormGroup>
          <Label for="qteinit">Quantité Initiale </Label>
          <Input type="text" name="qteinit" id="qteinit" onChange={this.onChange} value={this.state.qteinit === null ? '' : this.state.qteinit} />
        </FormGroup>
        <FormGroup>
          <Label for="qtestock">Quantité Stock</Label>
          <Input type="text" name="qtestock" id="first" onChange={this.onChange} value={this.state.qtestock === null ? '' : this.state.qtestock} />
        </FormGroup>
        <FormGroup>
          <Label for="categorie">Categorie</Label>
          <Input type="categorie" name="categorie" id="categorie" onChange={this.onChange} value={this.state.categorie === null ? '' : this.state.categorie}  />
        </FormGroup>
        <FormGroup>
          <Label for="designation">Designation</Label>
          <Input type="designation" name="designation" id="designation" onChange={this.onChange} value={this.state.designation === null ? '' : this.state.designation}  />
        </FormGroup>
        <FormGroup>
          <Label for="qtealerte">Quantité Alerte</Label>
          <Input type="qtealerte" name="qtealerte" id="qtealerte" onChange={this.onChange} value={this.state.qtealerte === null ? '' : this.state.qtealerte}  />
        </FormGroup>
        <FormGroup>
          <Label for="qtemin">Quantité Minimale</Label>
          <Input type="qtemin" name="designation" id="qtemin" onChange={this.onChange} value={this.state.qtemin === null ? '' : this.state.qtemin}  />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}

export default AddEditFormart;