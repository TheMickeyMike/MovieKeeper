import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import creditReducer from './creditReducer';
import trailerReducer from './trailerReducer';
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
    movies: movieReducer,
    credits: creditReducer,
    trailers: trailerReducer,
    form: formReducer,
});