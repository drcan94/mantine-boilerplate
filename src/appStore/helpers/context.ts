import { createContext } from "react";
import { AppDispatch, AsyncAction, RootState } from "./types";

export const AppDispatchContext = createContext<
  (action: ReturnType<AppDispatch> | AsyncAction) => void
>(() => null);

export const AppStateContext = createContext<RootState | undefined>(undefined);
