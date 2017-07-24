var React = require('react');
// var Link = require('react-router-dom').Link; // render anchor tag <a
var NavLink = require('react-router-dom').NavLink; // change style of <a tag is active

// No state or lifecycle

function Nav(){
  // exact only access this route unless the route is exactly the same
  return (
    <div className="navbar navbar-inverse navbar-expand-md navbar-dark bg-primary">
      <div className="container">
        <NavLink className="navbar-brand" to='/'>Petchoosy</NavLink>
        <div className="collapse navbar-collapse justify-content-end">
          <ul className='navbar-nav'>
            <li className='nav-item mx-3'>
              <NavLink exact activeClassName='active' to='/' className='nav-link'>
                Home
              </NavLink>
            </li>
            <li className='nav-item mx-3'>
              <NavLink activeClassName='active' to='/about' className='nav-link'>
                About
              </NavLink>
            </li>
            <li className='nav-item mx-3'>
              <NavLink activeClassName='active' to='/contact' className='nav-link'>
                Contact Us
              </NavLink>
            </li>
          </ul>
          <NavLink activeClassName='active' to='/signup' className="btn navbar-btn mx-3 btn-info text-primary active">
            Sign-up
          </NavLink>
          <NavLink activeClassName='active' to='/signin' className="btn navbar-btn mx-3 btn-info text-primary active">
            Sign-in
          </NavLink>
        </div>
      </div>
    </div>
  )
}

module.exports = Nav;
