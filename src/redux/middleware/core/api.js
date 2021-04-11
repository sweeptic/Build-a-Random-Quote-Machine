export const apiMiddleware = ({dispatch}) => next => action => {
   next(action);
}