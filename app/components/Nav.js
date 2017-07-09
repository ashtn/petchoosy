import React from 'react';

var NavLink = require('react-router-dom').NavLink;

function Nav(){
  return (
    <ul className='nav'>
      <li>
        Home
      </li>
      <li>
        Sign-in
      </li>
      <li>
        Sign-up
      </li>
      <li>
        About
      </li>
      <li>
        Contact Us
      </li>
    </ul>
  )
}
module.exports = Nav;
