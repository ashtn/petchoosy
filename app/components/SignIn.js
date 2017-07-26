import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Redirect } from 'react-router'
var api = require('../utils/api');

function SignInForm(props){

return(
  <div>
    <div className="col-md-6 align-self-center">
      <h1 className="pi-item">Sign-in</h1>
      <form className="" onSubmit={props.onSubmit}>
        <div className="form-group"> <label>Email address</label>
          <input
            type="email"
            name='email'
            className="form-control"
            placeholder="Enter email"
            onChange={props.onChange}
            value={props.email}
            autoComplete='on'
          />
        </div>
        <div className="form-group"> <label>Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Password"
            onChange={props.onChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  </div>
)}

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: {},
      redirect: false,
      user: {
        email: '',
        password: '',
        userId: ''
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

    const email = this.state.user.email;

    const password = this.state.user.password;

    const formData = { email, password };

    api.getLogin(formData)
      .then((response) => {

        this.setState({
          errors: {}, redirect: true, user: {userId: response.user_id}
        });
    })
  }

  render(props) {


    const { redirect } = this.state;

    if (redirect){
      return <Redirect to={{
        pathname: '/find',
        state: {userId: this.state.user.userId}
      }}/>
    }
    return (
      <div>
        <SignInForm
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          errors={this.state.errors}
          user={this.state.user}
        />
      </div>
    );
  }
}

module.exports = SignIn;
