import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {Featured} from './featured';
import {Carousel} from './carousel';
import {Results} from './results';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            featured: Featured,
            carousel: Carousel,
            results: Results
        }),
        applyMiddleware(thunk, logger)        
    );
    return store;
}