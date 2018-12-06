import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import creditReducer from './creditReducer';
import trailerReducer from './trailerReducer';

export default combineReducers({
    movies: movieReducer,
    credits: creditReducer,
    trailers: trailerReducer,
});