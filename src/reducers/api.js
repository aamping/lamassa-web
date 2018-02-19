import {createFilter} from 'react-search-input';
import * as api from '../actions/apiActions';

const initialState = {
  message: [],
  filteredMessages: [],
  reviewProduct: {},
};

const KEYS_TO_FILTERS = ['nom', 'text'];

export default (state = initialState, action) => {
  switch (action.type) {
    case api.FETCH_SUCCESS:
      return {
        message: action.payload ? action.payload : [],
        filteredMessages: action.payload ? action.payload : [],
      };
    case api.SEARCH_UPDATED:
      return {
        ...state,
        filteredMessages: state.message.filter(createFilter(action.payload, KEYS_TO_FILTERS)),
      };
    case api.CATEGORY_UPDATED: {
      let msgs = state.message;
      let oldArray = [];
      if (action.payload.join()) {
        action.payload.map((value) => {
          const newArray = state.message.filter(createFilter(value, ['etiqueta.nom']));
          msgs = oldArray.concat(newArray);
          oldArray = msgs;
          return null;
        });
      }
      return {
        ...state,
        filteredMessages: msgs,
      };
    }
    case api.REVIEW_PRODUCT: {
      const reviewProduct = state.message.filter(createFilter(action.payload.toString(), ['pk']));
      const productsProducer = state.message.filter(createFilter(reviewProduct[0].productor.id.toString(), ['productor.id']));
      return {
        ...state,
        reviewProduct: reviewProduct[0],
        productsProducer,
      };
    }
    default:
      return state;
  }
};
