import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import creditReducer from './creditReducer';

export default combineReducers({
    movies: movieReducer,
    credits: creditReducer,
});