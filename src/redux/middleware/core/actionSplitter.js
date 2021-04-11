export const actionSplitterMiddleware = () => next => action => {
  if (Array.isArray(action)) {
    action.forEach(action_item => next(action_item));
  } else {
    next(action);
  }
};
