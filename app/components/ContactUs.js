var React = require('react');
// var Link = require('react-router-dom').Link; // make a route transistion inside application <Link />

class ContactUs extends React.Component {
  render() {
    return (
      <div className='home-container'>
        <div className="bg-faded py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h1 className=" pi-item">Petchoosy</h1>
                <p> <strong>Petchoosy, Inc.</strong>
                  <br />1301 1st Ave.
                  <br />Seattle, WA. 98101&nbsp;
                  <br /> <abbr title="Phone">P:1.800-YO-MOMMAS-HOUSE</abbr>
                  <br />
                </p>
              </div>
              <div className="col-md-6">
                <h1 className="pi-item">CONTACT</h1>
                <form>
                  <div className="form-group"> <label htmlFor="exampleInputEmail1">Your name</label>
                    <input type="text" className="form-control" placeholder="Your name" /> </div>
                  <div className="form-group"> <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email"/> </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
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
      </div>
          )
          }
}


module.exports = ContactUs;
