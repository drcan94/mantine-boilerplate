// appStore/AppProvider.tsx
import React from "react";
import { AppDispatchContext, AppStateContext } from "./helpers/context";
import { store } from ".";
import { AppDispatch, AppProviderProps, AsyncAction } from "./helpers/types";

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const state = store.getState();
  const dispatch = async (action: ReturnType<AppDispatch> | AsyncAction) => {
    typeof action === "function"
      ? await action(store.dispatch, store.getState)
      : store.dispatch(action);
  };

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};
