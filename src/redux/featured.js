import * as ActionTypes from "./ActionTypes";

export const Featured = (state = { featured: [] }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_FEATURED:
      return { ...state, featured: action.payload };
    default:
      return state;
  }
};
