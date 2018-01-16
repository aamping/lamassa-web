import * as echo from '../actions/echo';

const initialState = {
  message: []
};

export default (state = initialState, action) => {
  console.log(action);
  switch(action.type) {
    case echo.ECHO_SUCCESS:
      return {
        message: action.payload
      };
    default:
      return state;
  }
};
