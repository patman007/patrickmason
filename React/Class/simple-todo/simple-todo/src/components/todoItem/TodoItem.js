import React from 'react'
const TodoItem = props =>{
  
  let classnames = () => {
    let classStrings = ''
    if(props.isComplete){
      classStrings += ' completed '
    }
    
    return classStrings
  }
  return  (
    <li 
    onClick={() => props.handleComplete(props.id)}
    className={ classnames() }
    >
      {props.text} 
        <span onClick={() => props.handleDelete(props.id)}>X</span>
    </li>
  )
}
export default TodoItem