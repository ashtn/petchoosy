var React = require('react');
var Link = require('react-router-dom').Link; // make a route transistion inside application <Link />
var NavLink = require('react-router-dom').NavLink;

// images


class Home extends React.Component {
  render() {
    return (
      <div className='home-container'>
        <div className="cover d-flex align-items-center pt-5 bg-primary" id="cover">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-6 py-5">
                    <h4 className="text-white text-left">The place for pairing pets and people, perfectly.</h4>
                  </div>
                  <div className="col-md-6 align-self-baseline">
                    <img className="img-fluid d-block m-0" src='app/assets/pets2.png'/>
                  </div>
                </div>
                <div className="col-md-12"> </div>
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
            <div className="row">
              <div className="col-md-7 push-md-5 my-3 align-self-center">
                <h2 className="text-primary my-3">Petchoosy is the place to find your new pet.</h2>
                <p className="lead"> It's important that everyone in a household is happy with a new pet.&nbsp;
                  <br />Petchoosy allows you and your loved one to research, review, and decide on a Petlist of perfect pets for you to meet!</p>
                <NavLink to="/about" className="btn btn-outline-primary btn-lg">Learn more</NavLink>
              </div>
              <div className="col-md-5 pull-md-7 my-3">
                <img className="img-fluid d-block" src='https://s3-us-west-2.amazonaws.com/petchoosy/assets/petlistcopy.png' /> </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = Home;
