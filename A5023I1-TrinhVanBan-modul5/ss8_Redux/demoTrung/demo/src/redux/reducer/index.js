import {combineReducers} from "redux";
import studentReducer from "./student";

export const rootReducer = combineReducers({
    students : studentReducer
})
