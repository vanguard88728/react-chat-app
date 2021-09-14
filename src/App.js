import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { auth } from './services/firebase';
import Home from './pages/Home';
import Chat from './pages/Chat';
import Signup from './pages/Signup';
import Login from './pages/Login';

function PrivateRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={routeProps => authenticated === true
        ? <Component {...routeProps} />
        : <Redirect to={{ pathname: 'login', state: { from: routeProps.location }}} /> }
    />
  )
}

function PublicRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={routeProps => authenticated === false
        ? <Component {...routeProps} />
        : <Redirect to='/chat' /> }
    />
  )
}

class App extends Component {

  render() {
    return this.state.loading === true ? <h2>Loading...</h2> : (
      <Router>
        <Switch>
          <Route exact path={'/'} component={Home} />
          <PrivateRoute path={'/chat'} authenticated={this.state.authenticated} component={Chat} />
          <PublicRoute path={'/signup'} authenticated={this.state.authenticated} component={Signup} />
          <PublicRoute path={'/login'} authenticated={this.state.authenticated} component={Login} />
        </Switch>
      </Router>
    );
  }
}

export default App;

