
export const ADD_FAVORITES = '@@user/ADD_FAVORITES';
export const HANDLE_DRAWER = '@@user/HANDLE_DRAWER';

export const addFavorites = ({ favorites }) => ({
  type: ADD_FAVORITES,
  payload: favorites
});

export const handleDrawer = ({ open }) => ({
  type: HANDLE_DRAWER,
  payload: open
});
