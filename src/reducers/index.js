import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import creditReducer from './creditReducer';
import trailerReducer from './trailerReducer';
import movieAddForm from './movieAddFormReducer';
import freshenerReducer from './freshenerReducer';

export default combineReducers({
    movies: movieReducer,
    credits: creditReducer,
    trailers: trailerReducer,
    movieAddForm: movieAddForm,
    freshener: freshenerReducer,
});