var React = require('react');
// var Link = require('react-router-dom').Link; // render anchor tag <a
var NavLink = require('react-router-dom').NavLink; // change style of <a tag is active

// No state or lifecycle

function Nav(){
  // exact only access this route unless the route is exactly the same
  return (
    <ul className='nav'>
      <li>
        <NavLink exact activeClassName='active' to='/'>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/signup'>
          Sign-up
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/signin'>
          Sign-in
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/about'>
          About
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/contact'>
          Contact Us
        </NavLink>
      </li>
    </ul>
  )
}

module.exports = Nav;
