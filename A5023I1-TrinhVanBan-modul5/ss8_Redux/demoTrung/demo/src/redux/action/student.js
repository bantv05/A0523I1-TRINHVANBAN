import studentService from "../../services/StudentService";
import {CREATE_STUDENT, GET_ALL_STUDENTS} from "./types";

export const getAllStudent = () => async(dispatch) => {
  try {
      const res = await studentService.findAll();
      dispatch({
          type: GET_ALL_STUDENTS,
          payload: res.data
      })
  } catch (e) {
      console.log(e)
  }
}

export const createStudent = (student) => async(dispatch) => {
    try {
        const res = await studentService.save(student);
        dispatch({
            type: CREATE_STUDENT,
            payload: res.data
        })
    } catch (e) {
        console.log(e)
    }
}
