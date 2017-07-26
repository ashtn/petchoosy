
import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Redirect } from 'react-router'
var api = require('../utils/api');

function SignUpForm(props) {


  return (
    <div>
      <div className="col-md-6">
        <h1 className="pi-item">Sign-up</h1>
        <form onSubmit={props.onSubmit}>
          <fieldset className="form-group"> <label htmlFor="login">Your name</label>
            <input
              onChange={props.onChange}
              type="text"
              className="form-control"
              placeholder="Your name"
              name='name'
            />
          </fieldset>

          <div className="form-group"> <label>Email address</label>
            <input
              onChange={props.onChange}
              type="email"
              className="form-control"
              placeholder="Enter email"
              name='email'
            />
          </div>
          <div className="form-group"> <label>Password</label>
            <input
              onChange={props.onChange}
              type="password"
              className="form-control"
              placeholder="Password"
              name='password'
            />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
    </div>
  )
}



class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: {},
      user: {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      }
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {

    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const name = this.state.user.name;
    const email = this.state.user.email;
    const password = this.state.user.password;
    const confirmPassword = this.state.user.confirmPassword;
    const formData = { name, email, password, confirmPassword };


  }

  render() {
    return (
      <div>
        <SignUpForm
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          errors={this.state.errors}
          user={this.state.user}
        />
      </div>
    );
  }
}

module.exports = SignUp;
