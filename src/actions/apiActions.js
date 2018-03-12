import { RSAA } from 'redux-api-middleware';
import { withAuth } from '../reducers';

export const FETCH_REQUEST = '@@api/FETCH_REQUEST';
export const FETCH_SUCCESS = '@@api/FETCH_SUCCESS';
export const FETCH_FAILURE = '@@api/FETCH_FAILURE';

export const FETCH_PRODUCT_REQUEST = '@@api/FETCH_PRODUCT_REQUEST';
export const FETCH_PRODUCT_SUCCESS = '@@api/FETCH_PRODUCT_SUCCESS';
export const FETCH_PRODUCT_FAILURE = '@@api/FETCH_PRODUCT_FAILURE';

export const SEARCH_UPDATED = '@@api/SEARCH_UPDATED';
export const CATEGORY_UPDATED = '@@api/CATEGORY_UPDATED';

export const REVIEW_PRODUCT = '@@api/REVIEW_PRODUCT';

export const fetchList = () => ({
  [RSAA]: {
    endpoint: 'http://localhost:8000/api/auth/list',
    method: 'GET',
    headers: withAuth({ 'Content-Type': 'application/json' }),
    types: [
      FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE,
    ],
  },
});

export const fetchProduct = ({ term }) => ({
  [RSAA]: {
    endpoint: 'http://localhost:8000/api/auth/list',
    method: 'GET',
    headers: withAuth({ 'Content-Type': 'application/json' }),
    types: [
      {
        type: FETCH_PRODUCT_REQUEST,
        payload: term,
      },
      FETCH_PRODUCT_SUCCESS,
      FETCH_PRODUCT_FAILURE,
    ],
  },
});

export const searchUpdated = ({ term }) => ({
  type: SEARCH_UPDATED,
  payload: term,
});

export const categoryUpdated = ({ term }) => ({
  type: CATEGORY_UPDATED,
  payload: term,
});

export const reviewProduct = ({ term }) => ({
  type: REVIEW_PRODUCT,
  payload: term,
});
