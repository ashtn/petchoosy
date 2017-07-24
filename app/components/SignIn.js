var React = require('react');

class SignIn extends React.Component {
  render() {
    return (
      <div>
        <div className="col-md-6 align-self-center">
          <h1 className="pi-item">Sign-in</h1>
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

module.exports = SignIn;
