import { combineReducers } from "redux";

import { productsReducer } from "./products";
import { cartReducer } from "./cart";

const reducer = combineReducers({
  // Use the productsReducer to manage the state of the allProducts slice of the app state
  allProducts: productsReducer,

  // Use the cartReducer to manage the state of the cart slice of the app state
  cart: cartReducer,
});

export default reducer;
