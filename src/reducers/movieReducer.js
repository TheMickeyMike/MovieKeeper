import _ from 'lodash';
import { FETCH_MOVIES, FETCH_MOVIE, DELETE_MOVIE, SEEN_MOVIE, ADD_MOVIE_ERROR, ADD_MOVIE } from '../actions/types';

const INITIAL_STATE = {
    entities: {},
    errorMessage: ''
};


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_MOVIES:
            return { ...state, entities: { ...state.entities, ..._.mapKeys(action.payload, 'id') } };
        case FETCH_MOVIE:
            return { ...state, entities: { ...state.entities, [action.payload.id]: action.payload } };
        case DELETE_MOVIE:
            console.log(state.entities, action.payload)
            return { ...state, entities: { ..._.omit(state.entities, action.payload) } };
        case SEEN_MOVIE:
            return { ...state, entities: { ...state.entities, [action.payload.id]: action.payload } }
        case ADD_MOVIE:
            return { ...state, errorMessage: '' }

        case ADD_MOVIE_ERROR:
            return { ...state, errorMessage: action.payload }
        default:
            return state;
    }
}