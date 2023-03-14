export type User = {
  _id: string | null;
  name: string | null;
  email: string | null;
  role: string | null;
  username: string | null;
};

export type State = {
  user: User;
  token: string;
  loading: boolean;
  errorMessage: string | null;
};

export type Action =
  | { type: "REQUEST_LOGIN" }
  | { type: "LOGIN_SUCCESS"; payload: { user: User; token: string } }
  | { type: "LOGOUT" }
  | { type: "LOGIN_ERROR"; error: string };

let user: User = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser") as string).user
  : {
      _id: null,
      name: null,
      email: null,
      role: null,
      username: null,
    };

let token = localStorage.getItem("currentUser")
  ? (JSON.parse(localStorage.getItem("currentUser") as string).token as string)
  : "";

export const initialState: State = {
  user,
  token,
  loading: false,
  errorMessage: null,
};

export const authReducer = (initialState: State, action: Action) => {
  switch (action.type) {
    case "REQUEST_LOGIN":
      return {
        ...initialState,
        loading: true,
      };
    case "LOGIN_SUCCESS":
      return {
        ...initialState,
        user: action.payload.user,
        token: action.payload.token,
        loading: false,
      };
    case "LOGOUT":
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

    case "LOGIN_ERROR":
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error,
      };

    default:
      return initialState;
  }
};
