import {
  ADD_TO_CART,
  REMOVE_ITEMS,
  UPDATE_QUANTITY,
  EMPTY_STORE,
} from "./actionType";

const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

const removeItem = (productId) => {
  return {
    type: REMOVE_ITEMS,
    payload: productId,
  };
};

const updateQuantity = () => {
  return {
    type: UPDATE_QUANTITY,
    payload: {},
  };
};

const emptyStore = () => {
  return {
    type: EMPTY_STORE,
    payload: {},
  };
};

export { addToCart, removeItem, updateQuantity, emptyStore };
