import { UserAction, UserLoginType } from "./types";
import { initialUserInfo } from "../../index";
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} from "./constants";

export const userLoginReducer = (
  initialState: UserLoginType,
  action: UserAction
): UserLoginType => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {
        ...initialState,
        loading: true,
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...initialState,
        userInfo: {
          user: action.payload.user,
          token: action.payload.token,
        },
        loading: false,
        error: null,
      };

    case USER_LOGIN_FAIL:
      return {
        ...initialState,
        userInfo: initialUserInfo,
        loading: false,
        error: action.payload,
      };

    case USER_LOGOUT:
      return {
        ...initialState,
        userInfo: initialUserInfo,
        loading: false,
        error: null,
      };

    default:
      return initialState;
  }
};
