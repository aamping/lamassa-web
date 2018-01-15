import { RSAA } from 'redux-api-middleware';

export const ECHO_REQUEST = '@@echo/ECHO_REQUEST';
export const ECHO_SUCCESS = '@@echo/ECHO_SUCCESS';
export const ECHO_FAILURE = '@@echo/ECHO_FAILURE';

export const echo = () => ({
  [RSAA]: {
     endpoint: 'https://lamassa.org/api/list',
     method: 'GET',
     // headers: { 'Access-Control-Allow-Origin': '*' },
     types: ['REQUEST', 'SUCCESS', 'FAILURE']
   }
})
