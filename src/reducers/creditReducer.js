import _ from 'lodash';
import { FETCH_CREDIT } from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_CREDIT:
            return { ...state, [action.payload.id]: _.orderBy(action.payload.cast, ['order'], ['asc']).slice(0, 5) };
        default:
            return state;
    }
}