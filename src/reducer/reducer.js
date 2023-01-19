import todoList from "../resource/todoList"
import { ADD_TODOLIST, CHECKED_UNCHECKED, GET_LOCAL_DATA} from "../Action/action"

export const createReducers = (state=todoList, action) => {
    const copy = state.slice(0)
    switch (action.type) {
        case ADD_TODOLIST:
            copy[action.payload.day].push(action.payload)
            return copy

        case CHECKED_UNCHECKED:
            if(!(action.payload.check)){
                copy[action.payload.day][action.payload.key].check = false
                copy[action.payload.day][action.payload.key].finish = null
            }else{
                copy[action.payload.day][action.payload.key].check = true
                copy[action.payload.day][action.payload.key].finish = new Date().toLocaleString('ko-kr')
            }
            return copy

        case GET_LOCAL_DATA:
            return action.payload.data    

        default:
            return state
    }
}