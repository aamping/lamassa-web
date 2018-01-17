import * as api from '../actions/apiActions';

const initialState = {
  message: []
};

export default (state = initialState, action) => {
  console.log(action);
  switch(action.type) {
    case api.FETCH_SUCCESS:
      return {
        message: action.payload
      };
    default:
      return state;
  }
};
