
const initialState = {
  message: ""
};

export default (state = initialState, action) => {
  console.log(action);
  switch(action.type) {
    case 'SUCCESS':
      return {
        message: action.payload
      };
    default:
      return state;
  }
};
