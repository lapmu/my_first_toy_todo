import React from "react";

// 6각형의 외형
// 그 날 todo리스트의 달성 정도, 날짜
function Hexagon({todo, idx}) {
    // 초기값 설정
    let date = `Day`;
    let checked = [];

    // 체크가 된 요소만 필터링
    if(todo.length!==0){
        checked = todo.filter(el=>el.check===true)
    }
    return(
        <React.Fragment>
            <div className="hexagon_border">
                <div className={"hexagon"+idx}>
                    <span className="hexagon_day">{date+(idx+1)}</span>
                    <span className="hexagon_complete">{checked.length===todo.length&&todo.length!==0?`clear`:`${checked.length}/${todo.length}`}</span>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Hexagon;