
export const ADD_FAVORITES = '@@user/ADD_FAVORITES';

export const addFavorites = ({ favorites }) => ({
  type: ADD_FAVORITES,
  payload: favorites
});
