import React, { useState, useEffect } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Todo from './page/todo';
import SevenDays from './page/7days';
// import todoList from './resource/todoList';
import Sidebar from './components/sidebar';
// import unChecked from './MP_Blop.mp3'
// import checked from './MP_Tiny Button Push.mp3'
import { useDispatch, useSelector } from 'react-redux';
import { get_Local_Data } from './Action/action';


// 더블클릭으로 다짐적기
// SPA적용
// 전부 삭제 기능
// 데이터 받는 곳
// todo에서 데이터를 입력받아 끌어올리는 함수 필요
function App() {
  const [isTitle, setTitle] = useState(false)
  const [isTitleValue, setTitleValue] = useState('다짐을 적어주세요!')
  // const [isTodoList, setTodoList] = useState(todoList)
  const dispatch = useDispatch()
  const state = useSelector(state => state)
  // 상태 끌어올리기 (새로운 todo 만드는 함수)
  // const toDo = (content, idx) =>{
  //   // let data = {
  //   //   check: false,
  //   //   content: content,
  //   //   start: new Date().toLocaleString('ko-kr'),
  //   //   finish: null
  //   // }
  //   // todoList[idx].push(data)
  //   // let upData = todoList.slice(0)
  //   // setTodoList(upData);
  //   dispatch(addTodolist(content, idx))

  //   // 로컬에 저장
  //   const stringState = JSON.stringify(state)
  //   localStorage.setItem('todo-list' ,stringState)
  // }

  // 첫 로드시 로컬에 저장된 내용 가져오기
  useEffect(() => {
    const getTitle = localStorage.getItem('title')
    if(getTitle) {
      setTitleValue(JSON.parse(getTitle))
    }
    const getTodo = localStorage.getItem('todo-list')
    if(getTodo) {
      dispatch(get_Local_Data(JSON.parse(getTodo)))
    }
  }, [dispatch])

  // 체크박스 상태 끌어올리기
  // const finishCheck = (check, idx, key) => {
  //   // if(check){
  //   //   // 체크박스 위치 특정하기
  //   //   isTodoList[idx][key].check = false
  //   //   isTodoList[idx][key].finish = null

  //   //   // 체크된 내용 표시되게 리로드
  //   //   setTodoList(isTodoList.slice(0))
  //   dispatch(checked_Uncheaked(check, idx, key))  

  //     // 체크박스 현황 로컬에 저장
  //     const stringState = JSON.stringify(state)
  //     localStorage.setItem('todo-list' ,stringState)

  //     // 수빈님의 의견으로 소리 추가 
  //     // let audio = new Audio(unChecked)
  //     // audio.loop = false;
  //     // audio.volume = 0.3;
  //     // audio.play();
  //   // }else{
  //   //   isTodoList[idx][key].check = true
  //   //   isTodoList[idx][key].finish = new Date().toLocaleString('ko-kr')
  //   //   setTodoList(isTodoList.slice(0))
  //     // const todolist = JSON.stringify(isTodoList)
  //     // localStorage.setItem('todo-list' ,todolist)
  //     // let audio = new Audio(checked)
  //     // audio.loop = false;
  //     // audio.volume = 0.3;
  //     // audio.play();
  //   // }
  // }

  // 로컬스토리지 비우기 
  const handleLocal = () => {
    localStorage.clear()
    window.location.reload()
  }

  // 다짐 바꾸기
  const handleDobleClick = (e) => {
    setTitle(true)
  }
  
  const handleKeyDown = (e) => {
    if(e.key === 'Enter') {
      setTitle(false)

      // 다짐 바꿀때 로컬에 저장
      const titleJson = JSON.stringify(isTitleValue)
      localStorage.setItem('title', titleJson)
    }
  }

  const handleChange = (e) => {
    setTitleValue(e.target.value)
  }
  return (
    <BrowserRouter>
      <Sidebar isTodoList = {state} handleLocal={handleLocal}/>
      <main>
        <div className='title'>
          {isTitle?
            <input className='input_title' type='text' value={isTitleValue} onChange={handleChange} onKeyDown={handleKeyDown}></input>:
            <div className='title_content' onDoubleClick={handleDobleClick}>{isTitleValue}</div>
          }
        </div>
        <div className='display'>
          <Routes>
            <Route path='/' element={<SevenDays todoList={state}/>}/>
            {state.map((el, idx)=>{
              return <Route key={idx} path={'/todo'+idx} element={<Todo idx={idx} />}/>
            })}
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
