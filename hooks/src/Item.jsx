import React from 'react'

const CustomItem = ({task: {content, isHidden}, index, dispatch}) => {
  return (
    <div style={{
        backgroundColor: "green",
        width: "60vw", 
        filter: `${isHidden ? "blur(1px)" : "blur(0px)"}`
    }}>
        <h3>{isHidden ? "This Content is Hidden" : content}</h3>
        <button onClick={() => {
            dispatch({type: "TOGGLE_TASK_VISIBILITY", payload: index})
        }}>Toggle</button>
    </div>
  )
}

export default CustomItem
