import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import creditReducer from './creditReducer';
import trailerReducer from './trailerReducer';
import movieAddForm from './movieAddForm';

export default combineReducers({
    movies: movieReducer,
    credits: creditReducer,
    trailers: trailerReducer,
    movieAddForm: movieAddForm,
});