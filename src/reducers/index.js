import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import echo from './echo.js';
import user from './user.js';

export default combineReducers({
  router: routerReducer,
  echo: echo,
  user: user
});
