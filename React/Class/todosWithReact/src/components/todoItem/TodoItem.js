import React from 'react'

const TodoItem = props =>{
  
  // let classnames = () => {
  //   let classStrings = ''
  //   if(props.isComplete){
  //     classStrings += ' completed '
  //   }
    
  //   return classStrings
  // }

  return  (
    <li 
    onClick={() => props.handleComplete(props.id)}
    className={ props.isComplete ? 'completed' : '' }
    >
      {props.text} 
      <span onClick={(event) => props.handleDelete(props.id, event)}>X</span>
    </li>
  )
}

export default TodoItem