import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class AddEditForminv extends React.Component {
  state = {
    id: 0,
    date_deb: '',
    date_fin: '',
    typemvt:'',
    qtemvt: 0,
    pumvt: 0,
    designation: ''
  }

  onChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitFormAdd = e => {
    e.preventDefault()
    fetch('http://localhost:3000/inventaires', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: this.state.id,
        date_deb: this.state.date_deb,
        date_fin: this.state.date_fin,
        typemvt: this.state.typemvt,
        qtemvt: this.state.qtemvt,
        pumvt: this.state.pumvt,
        designation: this.state.designation        
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
    fetch('http://localhost:3000/inventaires', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: this.state.id,
        date_deb: this.state.date_deb,
        date_fin: this.state.date_fin,
        typemvt: this.state.typemvt,
        qtemvt: this.state.qtemvt,
        pumvt: this.state.pumvt,
        designation: this.state.designation        
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
      const { id, date_deb, date_fin, typemvt, qtemvt, pumvt, designation } = this.props.item
      this.setState({ id, date_deb, date_fin, typemvt, qtemvt, pumvt, designation })
    }
  }

  render() {
    return (
      <Form onSubmit={this.props.item ? this.submitFormEdit : this.submitFormAdd}>
        <FormGroup>
          <Label for="id">Id</Label>
          <Input type="text" name="id" id="id" onChange={this.onChange} value={this.state.id === null ? '' : this.state.id} />
        </FormGroup>
        <FormGroup>
          <Label for="date_deb">Date Debut</Label>
          <Input type="text" name="date_deb" id="date_deb" onChange={this.onChange} value={this.state.date_deb === null ? '' : this.state.date_deb} />
        </FormGroup>
        <FormGroup>
          <Label for="date_fin">Date Fin</Label>
          <Input type="text" name="date_fin" id="date_fin" onChange={this.onChange} value={this.state.date_fin === null ? '' : this.state.date_fin}  />
        </FormGroup>
        <FormGroup>
          <Label for="typemvt">Type_mvt</Label>
          <Input type="text" name="typemvt" id="typemvt" onChange={this.onChange} value={this.state.typemvt === null ? '' : this.state.typemvt} />
        </FormGroup>
        <FormGroup>
          <Label for="designation">Designation</Label>
          <Input type="text" name="designation" id="designation" onChange={this.onChange} value={this.state.designation === null ? '' : this.state.designation} />
        </FormGroup>
        <FormGroup>
          <Label for="qtemvt">Quantité Mouvementée</Label>
          <Input type="text" name="qtemvt" id="qtemvt" onChange={this.onChange} value={this.state.qtemvt === null ? '' : this.state.qtemvt} />
        </FormGroup>
        <FormGroup>
          <Label for="pumvt">PU</Label>
          <Input type="pumvt" name="pumvt" id="pumvt" onChange={this.onChange} value={this.state.pumvt === null ? '' : this.state.pumvt}  />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}

export default AddEditForminv;