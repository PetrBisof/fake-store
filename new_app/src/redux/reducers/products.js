import { ActionTypes } from "../constants/constants";

// Action creator function that returns an action object to set products in the state
export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};
