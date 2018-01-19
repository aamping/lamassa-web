
export const ADD_FAVORITES = '@@user/ADD_FAVORITES';
export const HANDLE_DRAWER = '@@user/HANDLE_DRAWER';
export const ADD_CART = '@@user/ADD_CART';

export const addFavorites = ({ favorites, itemPk }) => {
  if (favorites.includes(itemPk)) {
    const index = favorites.indexOf(itemPk);
    favorites.splice(index, 1);
  } else {
    favorites.push(itemPk);
  }
  return {
    type: ADD_FAVORITES,
    payload: favorites
  };
}

export const addToCart = ({ tipus, quantitat, cart, item }) => {
  const pi = { pk: item.pk };
  console.log(cart.includes(pi));
  if (cart.includes({ pk: item.pk })) {
    // const index = cart.indexOf({ pk: item.pk });
    //cart.splice(index, 1);
    return {
      type: ADD_CART,
      payload: cart
    };
  } else {
    cart.push({ ...item, tipus: tipus ? tipus : item.formats[0], quantitat: quantitat ? quantitat : 1 });
  }
  return {
    type: ADD_CART,
    payload: cart
  };
}

export const handleDrawer = ({ open }) => ({
  type: HANDLE_DRAWER,
  payload: open
});
