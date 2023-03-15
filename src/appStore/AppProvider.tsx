import React, { useReducer } from "react";
import { AppDispatchContext, AppStateContext } from "./helpers/context";
import { rootReducer, store } from ".";
import { AppDispatch, AppProviderProps, AsyncAction } from "./helpers/types";

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [state, _dispatch] = useReducer<typeof rootReducer>(
    rootReducer,
    store.getState()
  );

  const dispatch = async (action: ReturnType<AppDispatch> | AsyncAction) => {
    typeof action === "function" ? await action(_dispatch) : _dispatch(action);
  };

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};
