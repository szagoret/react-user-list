import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import UserReducer from "./reducer_users";

const rootReducer = combineReducers({
    usersState: UserReducer,
    form: formReducer
});

export default rootReducer;