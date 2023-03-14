import React, { Dispatch, useReducer, useContext, createContext } from "react";
import { initialState, authReducer, State, Action } from "./reducer";

export const AuthStateContext = createContext<State | undefined>(undefined);
export const AuthDispatchContext = createContext<Dispatch<Action>>(() => null);

export function useAuthState() {
  const context = useContext(AuthStateContext);
  if (context === undefined) {
    throw new Error("useAuthState must be used within a AuthProvider");
  }

  return context;
}

export const useAuthDispatch = () => {
  const context = useContext(AuthDispatchContext);
  if (context === undefined) {
    throw new Error("useAuthDispatch must be used within a AuthProvider");
  }

  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}: any) => {
  const [state, dispatch] = useReducer<typeof authReducer>(
    authReducer,
    initialState
  );

  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
};
