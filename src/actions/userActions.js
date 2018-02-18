
export const ADD_FAVORITES = '@@user/ADD_FAVORITES';
export const HANDLE_DRAWER = '@@user/HANDLE_DRAWER';
export const ADD_CART = '@@user/ADD_CART';
export const REMOVE_CART = '@@user/REMOVE_CART';

export const addFavorites = ({ favorites, itemPk }) => {
  if (favorites.includes(itemPk)) {
    const index = favorites.indexOf(itemPk);
    favorites.splice(index, 1);
  } else {
    favorites.push(itemPk);
  }
  return {
    type: ADD_FAVORITES,
    payload: favorites,
  };
};

export const addToCart = (item, comanda, cart) => {
  const { pk } = item;
  let pos = false;
  const exist = cart.map((value, index) => {
    if (value.item.pk === pk) {
      pos = index;
      return true;
    }
    return false;
  });
  if (exist) {
    cart.push({ item, comanda });
  } else {
    cart.push({ item, comanda });
  }
  return {
    type: ADD_CART,
    payload: cart,
  };
};

export const removeFromCart = (cart, itemPk) => {
  let pos = false;
  const exist = cart.map((value, index) => {
    if (value.item.pk === itemPk) {
      pos = index;
      return true;
    }
    return false;
  });
  if (exist) {
    cart.splice(pos, 1);
  }
  return {
    type: REMOVE_CART,
    payload: cart,
  };
};

export const handleDrawer = ({ open }) => ({
  type: HANDLE_DRAWER,
  payload: open,
});
