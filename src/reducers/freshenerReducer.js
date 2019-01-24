import { REFRESH_MOVIES_REQUEST, REFRESH_MOVIES_SUCCESS, REFRESH_MOVIES_FAILURE } from '../actions/types';


export default (state = false, action) => {
    switch (action.type) {
        case REFRESH_MOVIES_REQUEST:
            return true;
        case REFRESH_MOVIES_SUCCESS:
            return false;
        case REFRESH_MOVIES_FAILURE:
            return false;
        default:
            return state;
    }
}