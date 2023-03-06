import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { batchedSubscribe } from "redux-batched-subscribe";
import _ from "lodash";

import { userLoginReducer } from "./reducers/userReducers";

const reducer = combineReducers({
  userLogin: userLoginReducer,
});

const userInfo = localStorage.getItem("userInfo");
const userInfoFromLS = userInfo
  ? JSON.parse(userInfo)
  : localStorage.setItem("userInfo", JSON.stringify([]));

const preloadedState = {
  userLogin: {
    userInfo: userInfoFromLS,
  },
};

const debounceNotify = _.debounce((notify) => notify());

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== "production",
  preloadedState,
  enhancers: [batchedSubscribe(debounceNotify)],
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
