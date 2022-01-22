// import { createStore, applyMiddleware, combineReducers } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";

// import settingsReducer from "./reducers/settingsReducer";

// const initialStore = {};

// const rootReducer = combineReducers({
//   settingsReducer,
// });

// export default createStore(
//   rootReducer,
//   initialStore,
//   composeWithDevTools(applyMiddleware())
// );

///////////////////////////

import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

import settingsReducer from "./reducers/settingsReducer";

const makeStore = () =>
  configureStore({
    reducer: {
      settings: settingsReducer,
    },
  });

export const store = makeStore();

export const wrapper = createWrapper(makeStore);
