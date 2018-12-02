import _ from 'lodash';
import { FETCH_MOVIES, FETCH_MOVIE } from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_MOVIES:
            return { ...state, ..._.mapKeys(action.payload, 'id') };
        case FETCH_MOVIE:
            return { ...state, [action.payload.id]: action.payload };
        default:
            return state;
    }
}