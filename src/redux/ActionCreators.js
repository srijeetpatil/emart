import * as ActionTypes from './ActionTypes';
import {baseurl} from '../data/baseurl';

export const fetchFeatured = (dispatch) => {
    return fetch(baseurl + 'featured')
        .then(response => response.json())
        .then(featured => dispatch(addFeatured(featured)))
};

export const addFeatured = (featured) => ({
    type: ActionTypes.ADD_FEATURED,
    payload: featured
});

export const fetchCarousel = (dispatch) => {
    return fetch(baseurl + 'carouselItems')
        .then(response => response.json())
        .then(carouselItems => dispatch(addCarousel(carouselItems)))
}

export const addCarousel = (carouselItems) => ({
    type: ActionTypes.ADD_CAROUSEL,
    payload: carouselItems
}) 

export const fetchResults = (category) => (dispatch) => {
    return fetch(baseurl + category)
    .then(response => response.json())
    .then(cat => dispatch(addResults(cat)))
}

export const addResults = (cat) => ({
    type: ActionTypes.ADD_RESULTS,
    payload: cat
})