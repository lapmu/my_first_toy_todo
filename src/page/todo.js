import React from "react";
import Table from "../components/table"
import{useState} from 'react'
import { addTodolist } from "../Action/action";
import { useDispatch, useSelector } from "react-redux";

// to-do list의 추가
// 로컬 저장, 불러오기
// 뒤로가기
// 날짜 
// 상태 끌어올리기 사용해야 함
function Todo({idx}) {
    const[isText, setText] = useState('Todo')
    const dispatch = useDispatch()
    const state = useSelector(state=>state)

    const hansdleClick = () => {
        //상태 끌어올릴 함수 실행
        dispatch(addTodolist(isText, idx))
        const stringState = JSON.stringify(state)
        localStorage.setItem('todo-list' ,stringState)
    }

    const handleChange = (e) => {
        setText(e.target.value)
    }

    return(
        <div className="todo_display">
            <div className="todoInput">
                <input className="todoInput_input" type='text' value={isText} onChange={handleChange}></input>
                <button className="todoInput_button" onClick={hansdleClick}>등록</button>
            </div>
            <div className="table">
                <div className="todo_list">
                    {/*todolist 표 작성*/}
                    <div className="col">완료</div>
                    <div className="col1">todo</div>
                    <div className="col2">시작일자</div>
                    <div className="col3">완료일자</div>
                </div>
                <Table idx={idx} />
            </div>
        </div>
        
    );
}

export default Todo;