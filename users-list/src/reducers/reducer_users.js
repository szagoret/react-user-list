import _ from 'lodash';
import { FETCH_USERS, ADD_USER, REMOVE_USER } from '../actions/index';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_USERS:
            return action.payload;
        case ADD_USER:
            return [action.payload, ...state];
        case REMOVE_USER:
            const newUserList = _.filter(state, (user, index) => index !== action.payload);
            return newUserList;
        default:
            return state;
    }
}