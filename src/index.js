import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import {Route, Switch} from 'react-router'

import LoginScreen from './containers/LoginScreen';
import PrivateRoute from './containers/PrivateRoute';
import './index.css';
import App from './App';
import configureStore from './store'

const history = createHistory();
const store = configureStore(history);

ReactDOM.render((
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/login/" component={LoginScreen} />
        <PrivateRoute path="/" component={App}/>
      </Switch>
    </ConnectedRouter>
  </Provider>
), document.getElementById('root'));
