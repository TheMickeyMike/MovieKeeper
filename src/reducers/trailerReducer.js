import _ from 'lodash';
import { FETCH_TRAILER } from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_TRAILER:
            return {
                ...state,
                [action.payload.movieId]: _.filter(action.payload.trailers, {
                    'type': 'Trailer',
                    'site': 'YouTube',
                })
            };
        default:
            return state;
    }
}