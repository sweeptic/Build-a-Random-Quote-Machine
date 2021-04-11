
export const normalizeMiddleware = ({dispatch}) => next => action => {

   if(action.type.includes('SET') && action.meta.normalizeKey){
      
      console.log('make some normalization');

   } else {
      next(action)
   }

}