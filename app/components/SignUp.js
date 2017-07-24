var React = require('react');

class SignUp extends React.Component {
  render() {
    return (
      <div>
        <div className="col-md-6">
          <h1 className="pi-item">Sign-up</h1>
          <form>
            <fieldset className="form-group"> <label htmlFor="login">Your name</label>
              <input type="text" className="form-control" placeholder="Your name" /> </fieldset>
          </form>
          <form className="">
            <div className="form-group"> <label>Email address</label>
              <input type="email" className="form-control" placeholder="Enter email" /> </div>
            <div className="form-group"> <label>Password</label>
              <input type="password" className="form-control" placeholder="Password" /> </div>
            <button type="submit" className="btn btn-primary">Login</button>
          </form>
        </div>
      </div>
    )
  }
}

module.exports = SignUp;
