var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css'); // everything included in the index.css will be included in the application when it bundles // aligns with css and style-loader in webpack

//state
//lifecycle
// UI - render(){return JSX}
class App extends React.Component {
  render(){
    return (
      <div>
        And I am up and running! =] 
      </div>
    )
  }
}
//what to render and where to render to
ReactDOM.render(
  <App /> ,
  document.getElementById('app')
);
