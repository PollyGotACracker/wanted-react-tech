import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import userReducer from "../features/user/userSlice";

const loggerMiddleware =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    console.log(action);
    return next(action);
  };

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware),
  devTools: true,
});
