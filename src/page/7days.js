import React from "react";
import {Link} from "react-router-dom";
import Hexagon from "../components/hexagon";

// 7개의 육각형
// paging
function SevenDays({todoList}) {

    const up = todoList.slice(0,4);
    const down = todoList.slice(4);
    return(
        <React.Fragment>
            <div className="sevenDays">
                <div className="seven_up">
                    {/*데이터 뽀개서 넣기 4개*/}
                    {up.map((el, idx)=>{
                        return(<Link className={'a'+idx} to={'/todo'+idx} key={idx}>
                            <Hexagon todo={el} idx={idx}/>
                        </Link>)
                    })}
                </div>
                <div className="seven_down">
                    {/*데이터 뽀개서 넣기 3개*/}
                    {down.map((el, idx)=>{
                        return(<Link className={'a'+(idx+4)} to={'/todo'+(idx+4)} key={idx+4}>
                            <Hexagon todo={el} idx={idx+4}/>
                        </Link>)
                    })}
                </div>
            </div>
        </React.Fragment>
    );
}

export default SevenDays;