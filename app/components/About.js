var React = require('react');
var NavLink = require('react-router-dom').NavLink;
// var Link = require('react-router-dom').Link; // make a route transistion inside application <Link />

class About extends React.Component {
  render() {
    return (
      <div className='home-container'>
        <div className="py-5 section text-center">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="text-primary">ABOUT</h1>
                <p className="lead">People love pets. Pets love people. We love seeing people love pets and pets love people.&nbsp;
                  <br />Here at Petchoosy we make it our place to place people that love pets and pets that love people in the same place.
                  <br />Petchoosy. A pet &amp; people place.
                  <br />LULZ </p>
              </div>
            </div>
          </div>
        </div>
        <div className="section py-5 text-md-left" id="app">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <img className="img-fluid d-block w-100" src="app/assets/pets5.png" /> </div>
            </div>
          </div>
        </div>
        <div className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="">Create a PetList</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <NavLink className="btn btn-primary btn-lg btn-block" to="/find">Create a PetList<i className="fa fa-check fa-fw"></i></NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = About;
