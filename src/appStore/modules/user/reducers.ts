import { UserAction, UserState } from "./types";
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} from "./constants";

export const userLoginReducer = (
  initialState: UserState,
  action: UserAction
) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {
        ...initialState,
        loading: true,
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...initialState,
        user: action.payload.user,
        token: action.payload.token,
        loading: false,
      };

    case USER_LOGIN_FAIL:
      return {
        ...initialState,
        loading: false,
        errorMessage: action.payload,
      };

    case USER_LOGOUT:
      return {
        ...initialState,
        user: {
          _id: null,
          name: null,
          email: null,
          role: null,
          username: null,
        },
        token: "",
      };

    default:
      return initialState;
  }
};
