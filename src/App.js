import React from 'react';
import { Route, Switch } from 'react-router';
import ListScreen from './containers/ListScreen';
import AppBarTitle from './components/AppBarTitle';
import PrivateRoute from './containers/PrivateRoute';
import LoginScreen from './containers/LoginScreen';

const styles = {
  appFrame: {
    // position: 'relative',
    // display: 'flex',
    backgroundColor: '#f7ecb5',
    // height: '-webkit-fill-available',
    overflow: 'hidden',
  },
};

const App = () => {
  return (
    <div style={styles.appFrame}>
      <AppBarTitle />
      <Switch>
        <Route path="/login/" component={LoginScreen} />
        <PrivateRoute path="/" component={ListScreen} />
      </Switch>
      <footer>
        weke
      </footer>
    </div>
  );
};

export default App;
