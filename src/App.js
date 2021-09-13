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
      render={(props) => authenticated === true
        ? <Component {...props} />
        : <Redirect to={{ pathname: 'login', state: { from: props.location }}} /> }
    />
  )
}

function PublicRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => authenticated === false
        ? <Component {...props} />
        : <Redirect to='/chat' /> }
    />
  )
}

class App extends Component {

  render() {
    return this.state.loading === true ? <h2>Loading...</h2> : (
      <Router>
        <Switch>
          <Route exact path={'/'} component={Home}/>
          <PrivateRoute path={'/chat'} authenticated={this.state.authenticated} component={Chat}/>
          <PublicRoute path={'/signup'} authenticated={this.state.authenticated} component={Signup}/>
          <PublicRoute path={'/login'} authenticated={this.state.authenticated} component={Login}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
