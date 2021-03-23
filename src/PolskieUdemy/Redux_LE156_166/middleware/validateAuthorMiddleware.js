import { ADD } from "../Actions/appActions";

export const validateAuthorMiddleware = (store) => (next) => (action) => {
  // console.log(action);
  if (action.type === ADD && !action.payload.author) {
    console.warn("Author nie ma imienia i nazwiska");
    return;
  }

  next(action);
};
