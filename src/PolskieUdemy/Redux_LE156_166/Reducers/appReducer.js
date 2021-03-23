import { ADD, EDIT, DELETE } from "../Actions/appActions";

export const appReducer = (state = [], action) => {
  console.log('Bedziemy tworzyc nowy stan');
  switch (action.type) {
    case ADD:
      return [...state, action.payload];
    case EDIT:
      return state.map((currentStateElement) => {
        if (currentStateElement.id !== action.payload.id) {
          return currentStateElement;
        }
        const { author, comment, rate } = action.payload;

        return {
          author: author,
          comment: comment,
          id: currentStateElement.id,
          rate,
        };
      });
    case DELETE:
      return state.filter(currentStateElement => currentStateElement.id !== action.payload.id);

    default:
      console.log(`Nie mamy action typ; ${action.type}`);

      return state;
  }
};