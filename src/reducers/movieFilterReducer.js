import { FILTER_MOVIES } from '../actions/types';

export default (state = '', action) => {
    switch (action.type) {
        case FILTER_MOVIES:
            return action.payload;
        default:
            return state;
    }
}