import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './home';
import Login from './login';
import Todo from './todo';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h2>Welcome to React Router Tutorial</h2>
          <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/Login'}>Login</Link></li>
            <li><Link to={'/todo'}>Todo</Link></li>
          </ul>
          <hr /> 
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/Login' component={Login} />
            <Route exact path='/todo' component={Todo} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
