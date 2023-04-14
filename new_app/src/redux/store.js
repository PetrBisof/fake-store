import { configureStore } from "@reduxjs/toolkit";

import reducer from "./reducers/index";

// Create the store using the `configureStore` function from the Redux Toolkit
const store = configureStore({
  reducer,
});

export default store;
