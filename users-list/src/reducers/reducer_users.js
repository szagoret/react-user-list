import { FETCH_USERS, ADD_USER } from '../actions/index';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_USERS:
            return action.payload;
        case ADD_USER:
            return [action.payload, ...state];
        default:
            return state;
    }
}