import { ActionTypes } from "../constants/constants";

const intialState = {
  inCart: {},
};

export const cartReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    // If the dispatched action is to add an item to the cart
    case ActionTypes.ADD_TO_CART: {
      let inCart = { ...state.inCart };
      // If the item is already in the cart, increment its quantity
      if (inCart[payload]) {
        inCart[payload] = inCart[payload] + 1;
        // Otherwise, add the item to the cart with a quantity of 1
      } else {
        inCart[payload] = 1;
      }
      // Return a new state object with the updated cart
      return { ...state, inCart: inCart };
    }

    case ActionTypes.REMOVE_FROM_CART: {
      let inCart = { ...state.inCart };
      // Decrement the quantity of the item in the cart
      inCart[payload] = inCart[payload] - 1;
      // If the quantity becomes 0, remove the item from the cart
      if (inCart[payload] === 0) {
        delete inCart[payload];
      }
      // Return a new state object with the updated cart
      return { ...state, inCart: inCart };
    }
    case ActionTypes.SET_NEW_VALUE_TO_CART: {
      // Create a copy of the cart object
      let inCart = { ...state.inCart };
      // Set the new value for the item
      inCart[payload.id] = payload.value;
      // Return a new state object with the updated cart
      return { ...state, inCart: inCart };
    }
    // If the dispatched action is not recognized, return the current state unchanged
    default:
      return state;
  }
};
