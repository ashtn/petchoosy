var React = require('react');
var Link = require('react-router-dom').Link; // make a route transistion inside application <Link />

class Home extends React.Component {
  render() {
    return (
      <div className='home-container'>
        <h1>This is the Home Page</h1>
        <Link className='button' to='/find'>Get Started</Link>
      </div>
    )
  }
}

module.exports = Home;
