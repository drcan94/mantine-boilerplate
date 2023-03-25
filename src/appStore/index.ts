import { configureStore } from "./helpers/configureStore";
import { combineReducers } from "./helpers/combineReducers";
import { userLoginReducer } from "./modules/user/reducers";
import { UserType, UserInfo, UserLoginType } from "./modules/user/types";

export type InitialState = {
  userLogin: UserLoginType;
};

export const rootReducer = combineReducers({
  userLogin: userLoginReducer,
});


export const initialUser: UserType = {
  _id: null,
  name: null,
  email: null,
  role: null,
  username: null,
};

export const initialUserInfo: UserInfo = {
  user: initialUser,
  token: "",
};

const userInfo: string = localStorage.getItem("currentUser") as string;
!userInfo &&
  localStorage.setItem("currentUser", JSON.stringify([initialUserInfo]));

const preloadedState: InitialState = {
  userLogin: {
    userInfo: userInfo ? JSON.parse(userInfo) : initialUserInfo,
    loading: false,
    error: null,
  },
};

export const store = configureStore({
  reducer: rootReducer,
  preloadedState,
  middlewares: [],
});
