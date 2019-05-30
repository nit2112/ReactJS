import { INCREASE, ADDCOURSE ,DELCOURSE, ADDSTUDENT ,DELSTUDENT } from "./types";


export const increase = () => {
  return async  dispatch => {
        // await console.log('hello');
        dispatch({type: INCREASE});
  }
}

export const addCourse = (course) => {
  return async  dispatch => {
        // await console.log('hello');
        dispatch({type: ADDCOURSE, payload:course});
  }
}

export const delCourse = (course) => {
    return async  dispatch => {
          // await console.log('hello');
          dispatch({type: DELCOURSE, payload:course});
    }
}

export const addStudent = (student) => {
  return async  dispatch => {
        // await console.log('hello');
        dispatch({type: ADDSTUDENT, payload:student});
  }
}

export const delStudent = (student) => {
  return async  dispatch => {
        // await console.log('hello');
        dispatch({type: DELSTUDENT, payload:student});
  }
}

