import {CREATE_STUDENT, GET_ALL_STUDENTS} from "../action/types";

const initialState = []
const studentReducer = (students = initialState, action) => {
    const {type, payload} = action;

    switch (type){
        case GET_ALL_STUDENTS:
            return payload;
        case CREATE_STUDENT:
            return [payload, ...students]
        default:
            return students
    }
}
export default studentReducer;
