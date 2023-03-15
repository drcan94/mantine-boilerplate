import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} from "./constants";

export type UserType = {
  _id: string | null;
  name: string | null;
  email: string | null;
  role: string | null;
  username: string | null;
};

export type UserInfo = {
  user: UserType;
  token: string;
};

export type UserLoginType = {
  userInfo: UserInfo;
  loading: boolean;
  error: null;
};



export type UserAction =
  | { type: typeof USER_LOGIN_REQUEST }
  | {
      type: typeof USER_LOGIN_SUCCESS;
      payload: { user: UserType; token: string };
    }
  | { type: typeof USER_LOGIN_FAIL; payload: string }
  | { type: typeof USER_LOGOUT };
