import axios from "axios";
import React from "react";
import { UserAction, UserInfo } from "./types";
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} from "./constants";

export const loginUser =
  (formData: FormData) => async (dispatch: React.Dispatch<UserAction>) => {
    try {
      dispatch({ type: USER_LOGIN_REQUEST });
      const { data } = await axios.post(
        `http://127.0.0.1:8000/api/auth/login`,
        formData,
        { headers: { "Content-Type": "application/json" } }
      );

      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data as UserInfo,
      });
      localStorage.setItem("currentUser", JSON.stringify(data));
    } catch (error: any) {
      dispatch({
        type: USER_LOGIN_FAIL,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };

export async function logout(dispatch: any) {
  dispatch({ type: USER_LOGOUT });
  localStorage.removeItem("currentUser");
  localStorage.removeItem("token");
}
