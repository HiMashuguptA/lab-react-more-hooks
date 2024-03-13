import React, { useReducer, useRef } from 'react'
import CustomItem from './Item'

const customReducer = (state, action) => {
    if(action.type === "ADD_TASK"){
        return [
            ...state , {
                content: action.payload , 
                isHidden: false
            }
        ]
    }
    if(action.type === "TOGGLE_TASK_VISIBILITY"){
        return state.map((task, index) => {
            return index === action.payload ? {...task, isHidden: !task.isHidden} : task
        })
    }
    return state
}

const initialTasks = [
    {
        content: "Item One..." ,
        isHidden: false
    },{
        content: "Item Two..." ,
        isHidden: false
    },{
        content: "Item Three..." ,
        isHidden: false
    },{
        content: "Item Four..." ,
        isHidden: false
    },{
        content: "Item Five..." ,
        isHidden: false
    },{
        content: "Item Six..." ,
        isHidden: false
    },{
        content: "Item Seven..." ,
        isHidden: false
    },{
        content: "Item Eight..." ,
        isHidden: false
    }
]

const Todo = () => {

    const [tasks, dispatch] = useReducer(customReducer, initialTasks)
    console.log(tasks)

    const taskInputRef = useRef(null)
  return (
    <div>
        <input ref={taskInputRef} type="text" style={{width: "38.25vw"}}
        onKeyDown={(e) => {
            if(e.key === "Enter"){
                dispatch({type: "ADD_TASK", payload: e.target.value})
                e.target.value = ""
            }
        }}/>
        {tasks.map((task, index) => {
            return <CustomItem task={task} index={index} dispatch={dispatch}/>
        })}
        <button onClick={() => {
            window.scrollTo({top: 0, behavior: "smooth"})
            taskInputRef.current.focus()
        }}>Get Back Writting </button>  
    </div>
  )
}

export default Todo
