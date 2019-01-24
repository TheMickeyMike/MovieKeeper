import _ from 'lodash';
import { FETCH_MOVIES, FETCH_MOVIE, DELETE_MOVIE, SEEN_MOVIE, ADD_MOVIE_SUCCESS } from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_MOVIES:
            return { ...state, ..._.mapKeys(action.payload, 'id') };
        case FETCH_MOVIE:
            return { ...state, [action.payload.id]: action.payload };
        case DELETE_MOVIE:
            return _.omit(state, action.payload);
        case SEEN_MOVIE:
            return { ...state, [action.payload.id]: action.payload }
        case ADD_MOVIE_SUCCESS:
            return { ...state, [action.payload.id]: action.payload }
        default:
            return state;
    }
}