import * as ActionTypes from './ActionTypes';

export const Results = (state = {results: []}, action) => {    
    switch(action.type){
        case ActionTypes.ADD_RESULTS:
            return {...state, results: action.payload}
        default:
            return state;
    }
}