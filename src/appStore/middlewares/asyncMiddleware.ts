export const asyncMiddleware = ({ dispatch, getState }: any) => {
    return (next: any) => (action: any) => {
      if (typeof action === 'function') {
        return action(dispatch, getState);
      }
  
      return next(action);
    };
  };
  