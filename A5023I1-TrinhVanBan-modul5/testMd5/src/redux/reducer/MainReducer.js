import {combineReducers} from "redux";
import studentReducer from "./StudentReducer";

const mainReducer = combineReducers({
    students: studentReducer,
    // teachers: teacherReducer,
    // username: usernameReducer
})

export default mainReducer;