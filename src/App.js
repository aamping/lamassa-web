import React, { Component } from 'react';
import {Route, Switch} from 'react-router';
import ListScreen from './containers/ListScreen';
import AppBarTitle from './components/AppBarTitle';
import PrivateRoute from './containers/PrivateRoute';
import LoginScreen from './containers/LoginScreen';

const styles = {
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  }
};

class App extends Component {
  render() {
    return (
      <div style={styles.appFrame}>
        <AppBarTitle />
        <Switch>
          <Route path="/login/" component={LoginScreen} />
          <PrivateRoute path="/" component={ListScreen}/>
        </Switch>
      </div>
    );
  }
}

export default App;
