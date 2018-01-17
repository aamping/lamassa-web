import * as user from '../actions/userActions';

const initialState = {
  favorites: [],
  ts: 0,
  open: false
};

export default (state = initialState, action) => {
  console.log(action);
  switch(action.type) {
    case user.ADD_FAVORITES:
      return { ...state,
        favorites: action.payload,
        ts: (new Date()).getTime()
      };
    case user.HANDLE_DRAWER:
      return { ...state,
        open: action.payload
      };
    default:
      return state;
  }
};
