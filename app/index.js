// first react componet lives here
// import React, { Component } from 'react';
var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css'); // included when everything bundles
var App = require('./components/App');


ReactDOM.render(
  <App />,
  document.getElementById('app')
);
