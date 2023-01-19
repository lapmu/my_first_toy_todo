 export const ADD_TODOLIST = 'ADD_TODOLIST'
 export const CHECKED_UNCHECKED = 'CHECKED_UNCHECKED'
 export const GET_LOCAL_DATA = 'GET_LOCAL_DATA'
 

 export const addTodolist = (content, idx) => {
    return {
        type: ADD_TODOLIST,
        payload:{
            day: idx,
            check: false,
            content: content,
            start: new Date().toLocaleString('ko-kr'),
            finish: null
        }
    }
 }

 export const checked_Uncheaked = (check, idx, key) => {
    return {
        type: CHECKED_UNCHECKED,
        payload: {
            day: idx,
            key,
            check
        }
    }
 }

 export const get_Local_Data = (data) => {
    return {
        type: GET_LOCAL_DATA,
        payload: {
            data
        }
    }
 }