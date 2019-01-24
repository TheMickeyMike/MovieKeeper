import { combineReducers } from 'redux';
import { ADD_MOVIE_REQUEST, ADD_MOVIE_SUCCESS, ADD_MOVIE_FAILURE } from '../actions/types';


const isFetching = (state = false, action) => {
    switch (action.type) {
        case ADD_MOVIE_REQUEST:
            return true;
        case ADD_MOVIE_FAILURE:
            return false;
        case ADD_MOVIE_SUCCESS:
            return false;
        default:
            return state;
    }
}


const error = (state = '', action) => {
    switch (action.type) {
        case ADD_MOVIE_FAILURE:
            return action.payload.message;
        case ADD_MOVIE_SUCCESS:
            return '';
        default:
            return state;
    }
}

export default combineReducers({
    isFetching: isFetching,
    error: error,
});