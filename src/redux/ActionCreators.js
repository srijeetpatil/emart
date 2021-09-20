import * as ActionTypes from "./ActionTypes";
import database from "../data/database";

export const fetchFeatured = (dispatch) => {
  return database
    .get("featured.json")
    .then((featured) => dispatch(addFeatured(featured.data)));
};

export const addFeatured = (featured) => ({
  type: ActionTypes.ADD_FEATURED,
  payload: featured,
});

export const fetchCarousel = (dispatch) => {
  return database
    .get("carouselItems.json")
    .then((carouselItems) => dispatch(addCarousel(carouselItems.data)));
};

export const addCarousel = (carouselItems) => ({
  type: ActionTypes.ADD_CAROUSEL,
  payload: carouselItems,
});

export const fetchResults = (category) => (dispatch) => {
  return database.get(category + ".json").then((cat) => {
    dispatch(addResults(cat.data));
  });
};

export const addResults = (cat) => ({
  type: ActionTypes.ADD_RESULTS,
  payload: cat,
});
