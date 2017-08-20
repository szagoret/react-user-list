import { combineReducers } from "redux";
import UserReducer from "./reducer_users";

const rootReducer = combineReducers({
    usersState: UserReducer
});

export default rootReducer;