import * as user from '../actions/userActions';

const initialState = {
  favorites: [],
  ts: 0
};

export default (state = initialState, action) => {
  console.log(action);
  switch(action.type) {
    case user.ADD_FAVORITES:
      return { ...state,
        favorites: action.payload,
        ts: (new Date()).getTime()
      };
    default:
      return state;
  }
};
