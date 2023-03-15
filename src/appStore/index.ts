import { configureStore } from "./helpers/configureStore";
import { combineReducers } from "./helpers/combineReducers";
import { userLoginReducer } from "../modules/user/reducers";

export const rootReducer = combineReducers({
  userLogin: userLoginReducer,
});

const userInfo = localStorage.getItem("currentUser");
const userInfoFromLS = userInfo
  ? JSON.parse(userInfo)
  : localStorage.setItem("currentUser", JSON.stringify([]));

const preloadedState = {
  userLogin: { userInfo: userInfoFromLS, loading: false, error: null },
};

export const store = configureStore({
  reducer: rootReducer,
  preloadedState,
  middlewares: [],
});
