import { Link } from "react-router-dom"
import React from "react"

const Sidebar = ({isTodoList, handleLocal}) => {

    // A.C 누를시 로컬 스토리지 비우는 함수 사용 = 상태끌어올리기랑 비슷 
    const localStorageClear = () => {
        handleLocal()
    }

    return(
        <div className="sidebar">
            <Link className="side" to='/'>H</Link>
            {isTodoList.map((el, idx)=>{
                return <Link className={"side"+idx} key={idx} to={'/todo'+idx}>{idx+1}</Link>
            })}
            <div className="side7" onClick={localStorageClear}>A.C</div>
        </div>
    )
}

export default Sidebar;