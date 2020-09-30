import * as ActionTypes from './ActionTypes';

export const Carousel = (state = {carouselItems : []}, action) => {
    switch(action.type){
        case ActionTypes.ADD_CAROUSEL:
            return {...state, carouselItems: action.payload};
        default:
            return state;
    }
}