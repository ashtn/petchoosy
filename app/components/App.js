var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch; // Route render={}
var About = require('./About');
var ContactUs = require('./ContactUs');
var Home = require('./Home');
var Nav = require('./Nav');
var SignIn = require('./SignIn');
var SignUp = require('./SignUp');

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/signup' component={SignUp} />
            <Route path='/signin' component={SignIn} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={ContactUs} />
            <Route render={ function (){
              return <p>Not Found</p>
            }} />
          </Switch>
        </div>
      </Router>
    )
  }
}

module.exports = App;
