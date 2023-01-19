import { useDispatch, useSelector } from "react-redux";
import { checked_Uncheaked } from '../Action/action';

const Table = ({idx}) => {
    const dispatch = useDispatch()
    const state = useSelector(state=>state)
    

    // todo-list에 아무것도 없을때 
    if(state[idx].length===0) {
        return <div className="basic">to-do list를 작성하세요</div>
    }

    // 체크시 상태 끌어올리기 사용 
    const handleCheck = (e) => {
        
        dispatch(checked_Uncheaked(e.target.checked, idx, e.target.value))  
        const stringState = JSON.stringify(state)
        localStorage.setItem('todo-list' ,stringState)
        
    }
    return (state[idx].map((el, indx)=>{
        return(<div key={el.id} className="row">
            <div className="col">
                <input type='checkbox' value={indx} onChange={handleCheck} checked={el.check}/>
            </div>
            <div className="col1">{el.content}</div>
            <div className="col2">{el.start}</div>
            <div className="col3">{el.finish}</div>
        </div>)
    }))
}

export default Table;