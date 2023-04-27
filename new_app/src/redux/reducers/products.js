import { ActionTypes } from "../constants/constants";

const initialState = {
  products: [],
};

export const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // If the dispatched action is to set the products array
    case ActionTypes.SET_PRODUCTS:
      // Create a copy of the state object, and update the products field with the payload value
      return { ...state, products: payload };
    // If the dispatched action is not recognized, return the current state unchanged
    default:
      return state;
  }
};
