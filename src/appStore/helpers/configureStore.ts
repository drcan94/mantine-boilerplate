import { asyncMiddleware } from "../middlewares/asyncMiddleware";

interface ConfiguredStore {
  reducer: any;
  preloadedState?: any;
  middlewares?: any[];
}

/**
 * configureStore - A custom store configuration function with built-in support for async actions.
 * @param {Object} options - The configuration options for the store.
 * @param {Function} options.reducer - The root reducer function for the store.
 * @param {any} [options.preloadedState] - The initial state of the store.
 * @param {Array} [options.middlewares] - An optional array of additional middlewares to apply.
 * @returns {Object} The configured store object with `getState` and `dispatch` methods.
 */
export const configureStore = ({
  reducer,
  preloadedState,
  middlewares = [],
}: ConfiguredStore) => {
  // Set the default middlewares
  const defaultMiddlewares = [asyncMiddleware];

  // Check if the user-supplied middlewares already include asyncMiddleware
  const includesAsyncMiddleware = middlewares.some(
    (middleware) => middleware === asyncMiddleware
  );

  // If asyncMiddleware is not included, add it to the middlewares
  const combinedMiddlewares = includesAsyncMiddleware
    ? middlewares
    : [...defaultMiddlewares, ...middlewares];

  // Define the store object
  const store: any = {
    _state: preloadedState || reducer(undefined, { type: "" }),
    getState: () => store._state,
    dispatch: (action: any) => {
      // Handle async actions (thunks)
      if (typeof action === "function") {
        return action(store.dispatch, store.getState);
      }

      // Middleware API that will be passed to each middleware
      const middlewareAPI = {
        getState: store.getState,
        dispatch: (action: any) => store.dispatch(action),
      };

      // Create a middleware chain
      const chain = combinedMiddlewares.map((middleware) =>
        middleware(middlewareAPI)
      );

      // Compose middlewares and dispatch the action
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





