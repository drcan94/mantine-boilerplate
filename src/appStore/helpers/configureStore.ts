import { asyncMiddleware } from "../middlewares/asyncMiddleware";

interface ConfiguredStore {
  reducer: any;
  preloadedState?: any;
  middlewares?: any[];
}

export const configureStore = ({
  reducer,
  preloadedState,
  middlewares = [],
}: ConfiguredStore) => {
  const defaultMiddlewares = [asyncMiddleware];
  const combinedMiddlewares = [...defaultMiddlewares, ...middlewares];

  const store: any = {
    getState: () => preloadedState || reducer(undefined, { type: "" }),
    dispatch: (action: any) => {
      if (typeof action === "function") {
        return action(store.dispatch, store.getState);
      }

      const middlewareAPI = {
        getState: store.getState,
        dispatch: (action: any) => store.dispatch(action),
      };

      const chain = combinedMiddlewares.map((middleware) =>
        middleware(middlewareAPI)
      );
      const dispatch = chain.reduce(
        (next, middleware) => middleware(next),
        (action: any) => {
          store._state = reducer(store._state, action);
          return action;
        }
      );

      return dispatch(action);
    },
  };

  return store;
};
