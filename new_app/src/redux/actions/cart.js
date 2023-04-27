import { ActionTypes } from "../constants/constants";

// Action creator function to add an item to the cart
export const addToCart = (id) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: id,
  };
};

// Action creator function to remove an item from the cart
export const removeFromCart = (id) => {
  return {
    type: ActionTypes.REMOVE_FROM_CART,
    payload: id,
  };
};

// Action creator function to update a value associated with a cart item
export const setNewValueToCart = (payloadObject) => {
  return {
    type: ActionTypes.SET_NEW_VALUE_TO_CART,
    payload: payloadObject,
  };
};
