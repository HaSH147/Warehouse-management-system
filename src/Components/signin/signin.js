import React from 'react';
import './signin.css';

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInUsername: '',
      signInPassword: ''
    }
  }
  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value})
  }

  onUsernameChange = (event) => {
      this.setState({signInUsername: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value})
  }

  onSubmitSignIn = () => {
    fetch('http://localhost:3000/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword,
        username: this.state.signInUsername,
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange('home');
        }
      })
  }

  render() {
    const { onRouteChange } = this.props;
    return (
    <article className="br3 ba Hey b--black-30 mv5 w-100 w-50-s w-25-l mw6 shadow-1 center" >
      <main  className="pa4 black-80">
        <form className="measure  ">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0">Sign In</legend>
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
              className=" br3 b ph3 pv2 input-reset ba b--black bg-transparent hover-bg-white-70 grow pointer f6 dib" 
              type="submit" 
              value="Sign in" 
              onClick={ () => onRouteChange('home')}
            />
          </div>
          <br/>
          <input 
              className=" br3 b ph3 pv2 input-reset ba b--black bg-transparent hover-bg-white-70 grow pointer f6 dib" 
              type="submit" 
              value="Register" 
              onClick={() => onRouteChange('register')}
            />
         </form>
      </main>  
    </article>
    );
  }
}

export default Signin;
