import axios from "axios";
import React from "react";
import { Action } from "./reducer";
export async function loginUser(
  dispatch: React.Dispatch<Action>,
  formData: FormData
) {
  try {
    dispatch({ type: "REQUEST_LOGIN" });
    const response = await axios.post(
      `http://127.0.0.1:8000/api/auth/login`,
      formData,
      { headers: { "Content-Type": "application/json" } }
    );
    let data = response.data;
    if (data.user) {
      dispatch({ type: "LOGIN_SUCCESS", payload: {
        user: data.user,
        token: data.token
      } });
      localStorage.setItem("currentUser", JSON.stringify(data));
      return data;
    }
  } catch (error: any) {
    dispatch({ type: "LOGIN_ERROR", error: error.message });
  }
}

export async function logout(dispatch: any) {
  dispatch({ type: "LOGOUT" });
  localStorage.removeItem("currentUser");
  localStorage.removeItem("token");
}
