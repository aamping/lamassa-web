import {createFilter} from 'react-search-input';
import * as api from '../actions/apiActions';

const initialState = {
  message: [],
  filteredMessages: []
};

const KEYS_TO_FILTERS = ['nom', 'text'];

export default (state = initialState, action) => {
  switch(action.type) {
    case api.FETCH_SUCCESS:
      return {
        message: action.payload ? action.payload : [],
        filteredMessages: action.payload ? action.payload : []
      };
    case api.SEARCH_UPDATED:
      return {
        ...state,
        filteredMessages: state.message.filter(createFilter(action.payload, KEYS_TO_FILTERS))
      }
    case api.CATEGORY_UPDATED:
      return {
        ...state,
        filteredMessages: state.message.filter(createFilter(action.payload, ['etiqueta.nom']))
      }
    default:
      return state;
  }
};
