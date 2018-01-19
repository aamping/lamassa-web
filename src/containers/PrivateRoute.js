import React from 'react';
import { Route, Redirect, Switch } from 'react-router';
import { connect } from 'react-redux';
import * as reducers from '../reducers';
import DrawerBar from '../components/DrawerBar';
import ListScreen from './ListScreen';
import PreferScreen from './PreferScreen';
import CartScreen from './CartScreen';

const styles = {
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  }
};

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  if (isAuthenticated){
    return (
      <div style={styles.appFrame}>
        <DrawerBar />
        <Switch>
          <Route path= '/cart' component={CartScreen}/>
          <Route path= '/preferits' component={PreferScreen}/>
          <Route path= '/' component={ListScreen}/>
        </Switch>
        </div>
      )
  } else {
    return (
          <Redirect to={{
            pathname: '/login',
            state: { from: '' }
          }}/>
        )
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: reducers.isAuthenticated(state)
})

export default connect(mapStateToProps, null)(PrivateRoute);
