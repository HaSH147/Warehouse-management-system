import React from 'react';
import './register.css';
class Register extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      username: ''
    }
  }

  onUsernameChange = (event) => {
    this.setState({username: event.target.value})
  }

  onEmailChange = (event) => {
    this.setState({email: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({password: event.target.value})
  }

  onSubmitSignIn = () => {
    fetch('http://localhost:3000/register', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        username: this.state.username
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user) {
          this.props.loadUser(user)
          this.props.onRouteChange('home');
        }
      })
  }

  render() {
    return (
    	<article className="br3 ba Hey b--black-30 mv5 w-100 w-50-s w-25-l mw6 shadow-1 center" >
		      <main  className="pa4 black-80">
		        <form className="measure  ">
		          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
		            <legend className="f1 fw6 ph0 mh0">Register</legend>
		            <div className="mt3">
		              <label htmlFor="username" className=" b i db f5 black-80 ttu ph2 mb2">Username</label>
		              <input 
		              type="text" 
		              name="username" 
		              className="input-reset db w-100 mw-100 white  pv2 ph3 bg-white-30 hover-bg-white-70 hover-black outline-0 bn br-pill"
		              id="username"
		              onChange={this.onUsernameChange}
		              /> 
		            </div>
		             <div className="mt3">
		              <label htmlFor="email" className=" b i db f5 black-80 ttu ph2 mb2">Email</label>
		              <input 
		              type="email" 
		              name="Email" 
		              className="input-reset db w-100 mw-100 white  pv2 ph3 bg-white-30 hover-bg-white-70 hover-black outline-0 bn br-pill"
		              id="email-adress"
		              onChange={this.onEmailChange}
		              /> 
		            </div>
		            <div className="mv3">
		              <label htmlFor="password" className="b i db f5 black-80 ttu ph2 mb2">Password</label>
		                <input 
		                type="password" 
		                name="password" 
		                className="input-reset db w-100 mw-100 white b pv2 ph3 bg-white-30 hover-bg-white-70 hover-black outline-0 bn br-pill" 
		                id="password"
		                onChange={this.onPasswordChange}
		                />
		              </div>
		          </fieldset>
		          <div className="">
		              <input
		                onClick={this.onSubmitSignIn}
		                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
		                type="submit"
		                value="Register"
		              />
		            </div>
		         </form>
		      </main>  
    	</article>
    	);
  }
}

export default Register;
