import { RSAA } from 'redux-api-middleware';
import { withAuth } from '../reducers';

export const FETCH_REQUEST = '@@api/FETCH_REQUEST';
export const FETCH_SUCCESS = '@@api/FETCH_SUCCESS';
export const FETCH_FAILURE = '@@api/FETCH_FAILURE';

export const fetchList = () => ({
  [RSAA]: {
     endpoint: 'https://lamassa.org/api/list',
     method: 'POST',
     headers: withAuth({ 'Content-Type': 'application/json' }),
     types: [
       FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE
     ]
   }
})
